import { CollectionInputComplete, CollectionRelationInput } from "../Entities/Collection";
import { BaseDatabase } from "./BaseDatabase";

export class CollectionDatabase extends BaseDatabase {
    public async insertCollection(collection: CollectionInputComplete): Promise<void> {
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.collections} (id, title, subtitle, author)
            VALUES ("${collection.id}", "${collection.title}", "${collection.subtitle}", "${collection.author}");
            `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async insertCollectionRelation(collectionRelation: CollectionRelationInput): Promise<void>{
        try {
            await this.getConnection().raw(`
            INSERT INTO ${this.tableNames.collectionRelations} (id_collection, id_image)
            VALUES ("${collectionRelation.id_collection}", "${collectionRelation.id_image}");
            `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}