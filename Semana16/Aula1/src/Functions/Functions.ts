import { app, connection } from '../Server/server'
import { Request, Response } from "express";


export const getCertainUser = async (req: Request, res: Response) => {

   try {
      const title = req.query.title as string

      let response = await connection.raw(
         `
         SELECT * FROM aula48_exercicio
         WHERE (name LIKE "%${title}%");
         `
      );

      if(!response[0]){
         throw new Error("Name not Found")
      }

      // console.log(response[0])
      res.status(200).send(response[0])

   } catch (error) {
      res.status(400).send(error)
   }


}

