import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { convertStringToUserRole, signupInput } from "../types/user";

export const signupBusiness = async (input: signupInput): Promise<string> => {
try {
    if(
        !input.name ||
        !input.nickname ||
        !input.email ||
        !input.password ||
        !input.role   
    ) {
        throw new Error ('invalid fields: "name", "nickname", "email", "password" or "role"' )
    }
    
    const id: string = generateId()

    const hashedPassword = await hash(input.password)

    await insertUser({
        id,
        name: input.name,
        nickname: input.nickname,
        email: input.email,
        password: hashedPassword,
        role: convertStringToUserRole(input.role)

    })

    const token: string = generateToken({
        id,
        role: convertStringToUserRole(input.role)
    })
    
    return token
    

} catch (error) {
    throw new Error(error.message)
}

}