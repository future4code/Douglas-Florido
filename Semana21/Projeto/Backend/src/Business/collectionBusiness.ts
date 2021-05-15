import { CollectionDatabase } from "../Data/CollectionDatabase";
import { CollectionInput, CollectionRelationInput } from "../Entities/Collection";
import { InvalidInputError } from "../Error/InvalidInputError";
import { LoginAgain } from "../Error/LoginAgain";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";

export class CollectionBusiness {
    constructor(
        private collectionDatabase: CollectionDatabase,
        private idGenerator: IdGenerator,
        private authenticator: TokenManager
    ) { }

    async insertCollection(collection: CollectionInput): Promise<void> {
        if (
            !collection.title ||
            !collection.subtitle             
        ) {
            throw new InvalidInputError("Invalid input to insert Collection")
        }

        if(!collection.token){
            throw new LoginAgain("Token Invalid")
        }
        
        const id = await this.idGenerator.generateId()

        const tokenInfo = await this.authenticator.getTokenData(collection.token)


        await this.collectionDatabase.insertCollection({ 
            id, 
            title: collection.title,
            subtitle: collection.subtitle, 
            author: tokenInfo.id
        })
    }

    async insertCollectionRelation(collectionRelation: CollectionRelationInput): Promise<void> {
        if(!collectionRelation.id_collection || !collectionRelation.id_image){
            throw new InvalidInputError("Invalid input to insert Collection Relation")
        }

        await this.collectionDatabase.insertCollectionRelation(collectionRelation)
    }


}