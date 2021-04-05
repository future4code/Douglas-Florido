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

      const { name, email, password } = req.body

      if (!name ||  !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      

      const newUser: userExercicio = { id, email, password }

      await connection('to_do_list_users')
         .insert(newUser)

      res.status(201).send({ newUser })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}