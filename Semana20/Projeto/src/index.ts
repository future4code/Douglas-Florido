import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import Knex from "knex"
import { userRouter } from "./Routes/userRouter"
import { imageRouter } from "./Routes/imageRouter"

dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server running on port 3003")
 })


 app.use("/user", userRouter);
 app.use("/image", imageRouter)
