
import {Request, Response} from "express"
import { getBusiness } from "../Business/getBusiness";


export const get =  async (req: Request, res: Response) => {


    try {

        const token = req.headers.authorization!;

        const users = await getBusiness(token);

        res.send(users).status(200);

    } catch (error) {
        res.send({ message: error.message }).status(error.status);
    }
}