import { postgresConnection, user, password, database } from "./passwords"

module.exports = {
    development: {
        client: "pg",
        version: "9.5",
        connection: {
            host: "localhost",
            user,
            password,
            database
        }
    },

    production: {
        client: "pg",
        connection: postgresConnection
    }
};
