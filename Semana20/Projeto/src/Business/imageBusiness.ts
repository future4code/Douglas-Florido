import { ImageDatabase } from "../Data/imageDatabase";
import { UserDatabase } from "../Data/userDatabase";
import { ImageToBusiness } from "../Entities/Image";
import { AuthenticationData, UserComplete, UserInput } from "../Entities/User";
import { InvalidInputError } from "../Error/InvalidInputError";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";

export class ImageBusiness {
    constructor(
        private imageDatabase: ImageDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: TokenManager        
    ){}
    
    async insertImage(image: ImageToBusiness) { 
        if(!image.subtitle || !image.URL){
            throw new InvalidInputError("Invalid input to insert Image")
        }

        if(!image.token){
            throw new InvalidInputError("Please Login Again")
        }
        
        const id = await this.idGenerator.generateId()

        const tokenInfo = await this.authenticator.getTokenData(image.token)

        // console.log("id", id)
        // console.log("subtitle", image.subtitle)
        // console.log("URL", image.URL)
        // console.log("tokenInfo", tokenInfo.id)

        await this.imageDatabase.insertImage({id, subtitle: image.subtitle,URL: image.URL, fk_user: tokenInfo.id})
        


    }
    
    

}