import { Request, Response } from "express"
import { userToBusinessBTO } from "../Model/type"
import { generateId } from "../Services/generateId"

export const signup = async (req: Request, res: Response) => {

    try {
        let message = "Success!"
        const { name, email, password }  = req.body as userToBusinessBTO

        if (!name || !email || !password) {
            res.statusCode = 406
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }

         const 
         

         

    } catch (error) {

        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }

}