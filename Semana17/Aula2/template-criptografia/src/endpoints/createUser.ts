import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/generateId";
import { user } from "../types";
import {generateHash} from '../services/encryption';

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {

   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const dbPassword = await generateHash(password)

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId()

      const newUser: user = { id, name, nickname, email, password: dbPassword }

      await connection('to_do_list_users')
         .insert(newUser)

      const token: string = generateToken({ id })

      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}