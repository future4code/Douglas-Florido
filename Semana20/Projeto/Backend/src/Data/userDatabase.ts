import { UserComplete, UserInput } from "../Entities/User";
import { BaseDatabase } from "./BaseDatabase";
import {UserTable, ImageTable } from "../Constants/TableNames"

export class UserDatabase extends BaseDatabase {

    public async createUser(user: UserComplete): Promise<void> {
        try {
            await this.getConnection().raw(`
                INSERT INTO ${UserTable} (id, login, password)
                VALUES ("${user.id}", "${user.login}", "${user.password}");
                `)
            console.log("Insertion Completed!")
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async login(user: UserInput): Promise<any>{

        try{

            const result = await this.getConnection().raw(`
            SELECT id, password FROM  ${UserTable}
            WHERE (login LIKE "${user.login}")            
            `)
            // console.log(result)
            if(!result[0][0]){
                throw new Error("Login or Password Incorrect")
            }
            return ({id: result[0][0].id, password: result[0][0].password})

        } catch(error){
            throw new Error(error.sqlMessage || error.message)
        }


    }


}