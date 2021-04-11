import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from '../services/authenticator';

const newRecipe = async (req: Request, res: Response) => {
    try {

        const { title, description } = req.body
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token expired")
        }

        if (!title || !description) {
            throw new Error("Check your fields")
        }

        let date = new Date().toISOString().slice(0, 10) 
                      
        // console.log("date: ", date, typeof(date))

        let email = getTokenData(token)

        if(!email){
            throw new Error("Token expired")
        }

        //email = ao valor q eu quero dentro doq vem no token 
        email = email.result.email

        let idUser = await connection.raw(
            `
            SELECT id FROM User WHERE (email = "${email}");
            `
        )
        
        // console.log("idUser: ", idUser[0][0].id, typeof(idUser[0][0].id))

        //Valor correto do id
        idUser = idUser[0][0].id


        let newId = await connection.raw(
            `
            SELECT id FROM Recipe;
            `
        )

        // console.log("newId: ", newId[0].length)
        
        //quantidade de ID's existentes + 1
        newId = newId[0].length + 1


        await connection.raw(
            `            
            INSERT INTO Recipe (id, name, description, creation_date, fk_user)
            VALUES(${newId}, "${title}", "${description}", "${date}",${idUser} )
            `
        )

        res.status(201).send("Recipe Successfully Created")
        

    } catch (error) {
        res.status(400).send(error)
    }
}

export default newRecipe