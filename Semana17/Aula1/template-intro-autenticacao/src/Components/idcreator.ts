import { v4 } from "uuid";
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from '../types'

// Exercicio 1 letra b

export function idcreator(): string {
    return v4();
}

console.log("Generated Id: ", idcreator);

export default idcreator

// Exercicio 3 letra b
const expiresIn = '1min'
export const idgenerator = (input: AuthenticationData): string => {

    return jwt.sign(
        input,

        process.env.JWT_KEY! as string,        

        
        {
            expiresIn
        }
        
    ); 
}