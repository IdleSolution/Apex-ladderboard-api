const express = require("express");
const router = express.Router();
const knex = require("./../models/knex.js");
const NodeCache = require("node-cache");
const myCache = new NodeCache();

function leaderboard(order, req, res) {
    myCache.get("leaderboard" + order, (err, value) => {
        if (!err) {
            if (value === undefined) {
                knex("stats")
                    .select("*")
                    .limit(100)
                    .orderBy(order, "desc")
                    .then(data => {
                        res.json(data);
                        myCache.set(
                            "leaderboard" + order,
                            data,
                            14400,
                            (err, success) => {
                                if (err) {
                                    return err;
                                } else {
                                    return success;
                                }
                            }
                        );
                    });
            } else {
                res.json(value);
            }
        }
    });
}

router.post("/kills", (req, res) => {
    leaderboard("kills", req, res);
});

router.post("/level", (req, res) => {
    leaderboard("level", req, res);
});

module.exports = router;
