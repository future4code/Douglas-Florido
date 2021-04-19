import { businessToUserBTO, User, userToBusinessBTO } from "../Model/type";
import { generateId } from "../Services/generateId";
import {hash} from "../Services/generateHash"
import { generateToken } from "../Services/generateToken";


export const signupBusiness = async (input: userToBusinessBTO): Promise<businessToUserBTO> => {


    const id: string = generateId()

    const cypherPassword = await hash(input.password);

    const email = input.email 
   

    return({id: id, name: input.name, email: email, password: cypherPassword})


}