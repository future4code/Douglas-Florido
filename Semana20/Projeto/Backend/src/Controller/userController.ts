import { Request, Response } from "express";
import { UserBusiness } from "../Business/userBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { UserDatabase } from "../Data/userDatabase";
import { UserInput } from "../Entities/User";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";


export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const input: UserInput = {
                login: req.body.login,
                password: req.body.password,
            }

            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            );

            const token = await userBusiness.createUser(input)
            
            res.status(200).send({token})

        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {
        try {
            const input: UserInput = {
                login: req.body.login,
                password: req.body.password
            }

            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            );

            const token = await userBusiness.loginUser(input)
            
            res.status(200).send({token})

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }



}
