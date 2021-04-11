import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole } from "../types";
import { encrypter } from '../services/encrypter';
import { getTokenData } from "../services/authenticator"

export default async function getProfile(
   req: Request,
   res: Response
): Promise<void> {

   try {

      const token = req.headers.authorization;

      console.log("token: ", token)
      if (!token) {
         throw new Error("Token expired")
      }

      let result = getTokenData(token)

      if(!result){
         throw new Error("Invalid Token")
      }

      let  email: string = result.result.email;

      const information = await connection.raw(
         `
         SELECT id, name, email FROM User 
         WHERE (email = "${email}");
         `
      )
     
      console.log("info: ", information[0])

      res.status(200).send(information[0])
      
      
   } catch (error) {
      res.status(400).send(error)
   }




}
