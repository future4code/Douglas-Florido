import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { user, userRole, address } from "../types";
import { hash } from "../services/hashManager";
import getAddressInfo from '../services/getAddressInfo'

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password, role } = req.body
      const {CEP, numero, complemento} = req.body.address

      if (!name || !nickname || !email || !password || !role || !CEP) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password', 'email' e 'role'")
      }

      if(role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);

      

      

      const newAddress: Promise<address | null> = getAddressInfo(CEP, numero, complemento)

      const newUser: user = { id, name, nickname, email, password: cypherText, role, address: newAddress}
      
      
      await connection('to_do_list_users')
         .insert(newUser)

      const token: string = generateToken({ id, role })

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}