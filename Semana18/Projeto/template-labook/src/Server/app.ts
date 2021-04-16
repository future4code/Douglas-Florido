import dotenv from "dotenv"
import Knex from "knex"
import express, { Express } from "express"
import cors from "cors"
import knex from "knex"

dotenv.config()

export const connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   }
})

export const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
   console.log("Server running on port 3003")
})