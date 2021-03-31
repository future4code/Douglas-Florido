import app from './app'
import connection from './connection'
import { Request, Response } from "express";
// import {JSON} from 'knex'

app.put("/user", async (req: Request, res: Response) => {
    try {
        const response = await connection.raw(`
        INSERT INTO Users (name,nickname,email)
        VALUES(            
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
            );    
            `
        )
        console.log(req.body)
        res.status(201).send(response)
    } catch (error) {
        console.log(error.message)
        res.status(400).send(error)
    }
})

app.get("/user/:id", async (req, res) => {
    try {
        const response = await connection.raw(`
        SELECT * FROM Users
        WHERE (${req.params.id} = id);
        `)
        // if (response) {
        res.status(200).send(response)
        // }

        // console.log("Resposta", response)

        // if (response[0] === []){
        //     res.status(404).send("Id not found")
        // }

    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.post("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const response = await connection.raw(
            `
            UPDATE Users SET
            name = "${req.body.name}",
            nickname = "${req.body.nickname}",
            email = "${req.body.email}",
            task_id = "${req.body.task_id}",
            WHERE id = ${req.params.id};
            `
        )
        res.status(200).send("Updated Successfully")
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.put("/task", async (req: Request, res: Response) => {
    try {

        if (req.body) {
            // console.log("Data_Limite: ", req.body.data_limite)
            let transformar = req.body.data_limite.split("/")
            let data_nova = transformar[2]+"-"+transformar[1]+"-"+transformar[0]
            // console.log("Data COlocada no banco: ", data_nova)

            const response = await connection.raw(
                `
            INSERT INTO Tasks (titulo,descricao,data_limite,status)
            VALUES(            
            "${req.body.titulo}",
            "${req.body.descricao}",
            "${data_nova}",
            "${req.body.status}",            
            
            );    
            `
            )
            res.status(201).send(response)
        }

        else{
            res.status(400).send("Check fields")
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const response = await connection.raw(
            `
            SELECT * FROM Users LEFT JOIN Tasks
            ON Users.task_id = Tasks.id
            `
        )

        res.status(200).send(response)

    } catch (error) {
        res.status(400).send(error.message)
    }
})