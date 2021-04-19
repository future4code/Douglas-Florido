import { Request, Response } from "express"
import { signupBusiness } from "../Business/signupBusiness"
import { signupData } from "../Data/signupData"
import { businessToUserBTO, userToBusinessBTO } from "../Model/type"
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

        const info: businessToUserBTO =  await signupBusiness({name, email, password})

        const token: string = await signupData(info)  
         
        return token

    } catch (error) {

        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }

}