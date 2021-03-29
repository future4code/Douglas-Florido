import {connection} from '../Server/server'
import { Request, Response } from "express";


export default async function selectAllUsers(info: string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE (name = ${info}) 
    `)
 
    return result[0]
 }
 
 export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers(req.params.user)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 
 