import connection from '../connection'

const userTableName = "User";

const userinserter = async (id: string, email: string, password: string) => {
    try {
        const retorno = await connection.raw(
            `    
            INSERT INTO "${userTableName}" (id, email, password)
            VALUES ( "${id}", "${email}", "${password}" );
            
            `)
        return retorno

    } catch (error) {
        return error
    }
    
}