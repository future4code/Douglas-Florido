import { BaseDatabase } from "../Data/BaseDatabase";
import {Request, Response} from 'express'
import { ImageInput } from "../Entities/Image";
import { ImageBusiness } from "../Business/imageBusiness";
import { ImageDatabase } from "../Data/imageDatabase";
import { IdGenerator } from "../Services/IdGenerator";
import { HashManager } from "../Services/HashManager";
import { TokenManager } from "../Services/TokenManager";

export class ImageController {

    async insert(req: Request, res: Response) {
        try {
            const input: ImageInput = {
                subtitle: req.body.subtitle,
                URL: req.body.URL,
            }

            const token = req.params.token
            
            const imageBusiness = new ImageBusiness(
                new ImageDatabase,
                new IdGenerator,
                new HashManager,
                new TokenManager
            );

            // console.log("subtitle", input.subtitle)
            // console.log("URL", input.URL)

            await imageBusiness.insertImage({token: token, subtitle: input.subtitle, URL: input.URL})           
                
            res.status(201).send("Inserted Successfully")

            await BaseDatabase.destroyConnection();
    }    catch(error){
        res.status(400).send({ error: error.message });

    }

}
    



}