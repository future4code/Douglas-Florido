import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
import {compare} from '../services/encryption'

export default async function login(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if (!email || !password) {
         res.statusCode = 422
         throw new Error("'email' e 'password' são obrigatórios")
      }

      const [user] = await connection("to_do_list_users").where({ email })


      if (!compare(password,user.password) ) {
         res.statusCode = 401
         throw new Error("Credenciais inválidas")
      }

      
      const token = generateToken({
         id: user.id,
         role: user.role
      })

      res.send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}