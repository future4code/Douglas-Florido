import { UserComplete, UserInput } from "../Entities/User";
import { BaseDatabase } from "./BaseDatabase";
import { ImageTable, UserTable } from "../Constants/TableNames"
import { ImageComplete } from "../Entities/Image";

export class ImageDatabase extends BaseDatabase {

    public async insertImage(image: ImageComplete): Promise<void> {
        try {
            await this.getConnection().raw(`
                INSERT INTO ${ImageTable} (id, subtitle, URL, fk_user)
                VALUES ("${image.id}", "${image.subtitle}", "${image.URL}", "${image.fk_user}");
                `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }   

    public async getMusicById(id: string): Promise<void> {
        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM ${ImageTable}
            WHERE ( id = "${id}")
            `)

            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getUserById(id: string): Promise<void>{
        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM ${UserTable}
            WHERE ( id = "${id}")
            `)

            return result
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    


}