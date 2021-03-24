import knex from 'knex'
import dotenv from 'dotenv'

const connection = knex({

    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})
export default connection
// host: 35.226.146.116
// user: douglas-florido
// password: @YPzf2eidAljnf7ykH$b
// database: epps-douglas-florido
