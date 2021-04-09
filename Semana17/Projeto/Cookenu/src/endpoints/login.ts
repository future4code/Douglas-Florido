import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
// import { generateToken } from "../services/authenticator"
// import { userCredentials } from "../types"
import { verifier } from "../services/encrypter"

export default async function login(
   req: Request,
   res: Response
): Promise<void> {

   try {

      const { email, password } = req.body

      if (!email || !password) {
         throw new Error("E-mail or password void")
      }

      let realPassword  = await connection.raw(
         `
         SELECT password FROM User WHERE (email = "${email}");
         `
      )

      

      // console.log(realPassword[0], typeof realPassword)
      let enterOrNot = verifier(password, realPassword)
      if(!enterOrNot){
         throw new Error("E-mail or Password incorrect")
      }
      
      let token = generateToken(`tokenzinho`)

      // console.log("token: ",token)

      res.status(200).send(token)




   } catch (error) {


      res.send(error)

   }
}