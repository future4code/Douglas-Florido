import { UserDatabase } from "../data/UserDatabase";
import { BaseError } from "../error/BaseError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {

    constructor(
        private authenticator: Authenticator
    ){}

    async createBand(band: BandInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();        

        const tokenData = this.authenticator.getData(band.token)

        
        if(tokenData.role !== "ADMIN"){
            throw new UnauthorizedError("Access Denied: Only 'ADMINS' Role can create a Band.")
        }
       
        if(!band.name || !band.responsible || !band.music_genre){
            throw new BaseError("")
        }

        const bandDatabase = new UserDatabase();
        await bandDatabase.createBand(id, band.name, band.music_genre, band.responsible);
        
        return ([200, "Band Created Successfully!"]);
    }
}