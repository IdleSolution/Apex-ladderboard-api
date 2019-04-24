const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// Routes
const leaderboard = require("./api/leaderboard");
const stats = require("./api/stats");

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());

app.use("/stats", stats);
app.use("/leaderboard", leaderboard);

app.get("/", (req, res) => {
    res.send(
        "My own Apex API, to get top 100 by kills send POST request to leaderboard/kills, to get top 100 by level send POST request to leaderboard/level. Happy coding!"
    );
});

app.listen(port);
