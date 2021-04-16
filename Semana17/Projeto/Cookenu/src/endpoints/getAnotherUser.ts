import { Request, Response } from "express"
import connection from "../connection"



const getAnotherUser = async (req: Request, res: Response) => {

    try {
        
    const searchID = req.params.id
    const token = req.headers.authorization;

    if(!searchID){
        throw new Error("Invalid Params")
    }

    if (!token) {
        throw new Error("Token expired")
     }
    
    const user = await connection.raw(
        `
        SELECT id, name, email FROM User
        WHERE (id = "${searchID}");
        `
    )
    
    if(!user){
        throw new Error("No user found")
    }

    res.status(200).send(user[0])

    } catch (error) {
        res.status(400).send(error)
    }


} 

export default getAnotherUser