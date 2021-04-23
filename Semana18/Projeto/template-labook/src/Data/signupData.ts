import { businessToUserBTO } from "../Model/type";
import { connection } from "../Server/app";
import { generateToken } from "../Services/generateToken";



export const signupData = async (input: businessToUserBTO): Promise<string> => {
    try {
        await connection.raw(
            `
            INSERT INTO User (id, name, email, password )
            VALUES ("${input.id}", "${input.name}", "${input.email}", "${input.password}");
            `
        )

        return generateToken({id: input.id, email: input.email})

    } catch (error) {
        return error
    }

}