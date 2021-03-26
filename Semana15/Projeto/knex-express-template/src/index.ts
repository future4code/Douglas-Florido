import app from './app'
import connection from './connection'
import {Request, Response} from "express";
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

app.get("/user/:id", async(req, res)=>{
    try {
        const response = await connection.raw(`
        SELECT * FROM Users
        WHERE (${req.params.id} = id);
        `)

        res.status(200).send(response)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
})