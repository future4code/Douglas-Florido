import { connection } from "..";

 export const getData = async(): Promise<any[]> => {

    try {

        const users: any = [];

        const result = await connection()
            .select("*")
            .from(TABLE_NAME);

                    for(let user of result){
                            users.push(user);
                    }

        return users;

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}