import {Request, Response} from 'express'
import { loginBusiness } from '../Business/loginBusiness';
import { loginInput } from '../types/user';

export const login = async (
    req: Request,
    res: Response
 ): Promise<void> => {
    try {
 
       
       const { email, password } = req.body as loginInput;
    
       
       const token: string = await loginBusiness({ email, password });
 
       
       res.send({
          message: "Welcome!!",
          token
       })
 
    } catch (error) {
       res.status(400).send(error.message)
    }
 }