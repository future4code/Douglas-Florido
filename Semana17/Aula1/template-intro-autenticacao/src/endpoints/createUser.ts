import { Request, Response } from "express";
import connection from "../connection";
import { user, userExercicio, AuthenticationData } from "../types";
import {idgenerator, idcreator} from '../Components/idcreator'

//Exercicio 2 letra c
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}