const env = process.env.NODE_ENV || "production";
const config = require("./knex-stages")[env];

module.exports = require("knex")(config);
