import { UserComplete, UserInput } from "../Entities/User";
import { BaseDatabase } from "./BaseDatabase";
import { ImageTable, UserTable } from "../Constants/TableNames"
import { ImageComplete } from "../Entities/Image";

export class ImageDatabase extends BaseDatabase {

    public async insertImage(image: ImageComplete): Promise<void> {
        try {
            await this.getConnection().raw(`
                INSERT INTO ${this.tableNames.images} (id, subtitle, URL, fk_user)
                VALUES ("${image.id}", "${image.subtitle}", "${image.URL}", "${image.fk_user}");
                `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }   

    public async getImagesOfUser(id: string): Promise<any> {
        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM ${this.tableNames.images}
            WHERE ( fk_user = "${id}");
            `)

            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getImageById(id: string): Promise<any>{
        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM ${this.tableNames.images}
            WHERE ( id = "${id}");
            `)

            return result[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    


}