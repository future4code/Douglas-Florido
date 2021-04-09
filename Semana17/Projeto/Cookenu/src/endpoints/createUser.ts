import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";
import { encrypter } from '../services/encrypter';


export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const {id, name, email, password } = req.body

      if (!id || !name || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'id', 'name', 'email' e 'password'")
      }

      // let id: number = await parseInt(generateId())
      // console.log("id: ", id, typeof(id))
      

      let encriptedPassword = await encrypter(password)
      
      //${encriptedPassword}
      const result = await connection.raw(
         `
         INSERT INTO User (id, name, email, password)
         VALUES (${id}, "${name}", "${email}", "${encriptedPassword}");
         `
      )
      console.log(`${id}`, typeof(`${id}`))
      let token = generateToken(`${id}`)
      console.log("token: ",token)

      res.status(201).send(token)

   } catch (error) {

      
         res.send(error)
      
   }
}