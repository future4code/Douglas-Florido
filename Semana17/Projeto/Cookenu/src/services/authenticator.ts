import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()


export const generateToken = (
   payload: any
): string => {
   return jwt.sign(
      payload,
      process.env.JWT_KEY!,
      { expiresIn: "24h" }
   )
}

export const getTokenData = (
   token: string
) => {
   try {

      const result: any  = jwt.verify(token, process.env.JWT_KEY!) 
      // console.log("result: ", result)
      return { result }

   } catch (error) {
      
      console.log(error.message);
      return null
   }
}


