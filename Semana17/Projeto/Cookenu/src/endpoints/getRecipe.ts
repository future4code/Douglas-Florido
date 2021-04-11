import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from '../services/authenticator';

const getRecipe = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const token = req.headers.authorization

        if(!token){
            throw new Error("Token Expired")
        }

        if(!id){
            throw new Error("Invalid Id")
        }

        const find = await connection.raw(`
        SELECT * FROM Recipe WHERE (id = ${id});
        `)

        if(!find[0]){
            throw new Error("No Recipe Found")
        }

        res.status(200).send(find[0])

        
    } catch (error) {
        res.status(400).send(error)
    }

}

export default getRecipe