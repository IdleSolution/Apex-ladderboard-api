const express = require("express");
const router = express.Router();
const knex = require("./../models/knex.js");
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const axios = require("axios");

function update(username, platform, req, response) {
    knex("stats")
        .select("stats")
        .where({ username: username })
        .andWhere({ platform: platform })
        .then(data => {
            axios(
                `http://api.mozambiquehe.re/bridge?platform=${platform}&player=${username}`,
                {
                    method: "GET",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        Authorization: `${req.body.authorization}`,
                        withCredentials: true,
                        mode: "no-cors"
                    }
                }
            )
                .then(res => {
                    response.json(res.data);

                    myCache.set(
                        username + platform + "tracker",
                        res.data,
                        259200,
                        (error, success) => {
                            if (error) {
                                return error;
                            } else {
                                return success;
                            }
                        }
                    );

                    // User not found in database
                    if (data.length === 0) {
                        const kills = res.data.total.kills
                            ? res.data.total.kills
                            : 0;
                        knex("stats")
                            .insert({
                                username: username,
                                platform: platform,
                                kills: kills,
                                level: res.data.global.level
                            })
                            .then(data => data)
                            .catch(e => e);
                    } else {
                        // Checking if something updated since last database save
                        if (
                            data[0].kills !== res.data.total.kills &&
                            data[0].level !== res.data.total.kills
                        ) {
                            knex("stats")
                                .update({
                                    kills: res.data.total.kills,
                                    level: res.data.global.level
                                })
                                .where({ username: username })
                                .then(data => data)
                                .catch(e => e);
                        } else {
                            if (data[0].kills !== res.data.total.kills) {
                                knex("stats")
                                    .update({ kills: res.data.total.kills })
                                    .where({ username: username })
                                    .then(data => data)
                                    .catch(e => e);
                            }

                            if (data[0].level !== res.data.global.level) {
                                knex("stats")
                                    .update({ level: res.data.global.level })
                                    .where({ username: username })
                                    .then(data => data)
                                    .catch(e => e);
                            }
                        }
                    }
                })
                .catch(e => {
                    response.status(404).send({ error: e.response.data });
                });
        });
}

router.post("/get", (req, response) => {
    if (req.body.username.length === 0) {
        return response
            .status(404)
            .send({ error: { message: "You need to type username." } });
    }
    myCache.get(
        req.body.username + req.body.platform + "tracker",
        (err, value) => {
            if (!err) {
                if (value === undefined) {
                    update(req.body.username, req.body.platform, req, response);
                } else {
                    response.json(value);
                }
            } else {
                return err;
            }
        }
    );
});

router.post("/update", (req, res) => {
    myCache.del(
        req.body.username + req.body.platform + "tracker",
        (err, count) => {
            if (err) {
                return err;
            }
            update(req.body.username, req.body.platform, req, res);
        }
    );
});

module.exports = router;
