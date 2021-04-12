import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { loginInput, user } from "../types/user";

export const loginBusiness = async (input: loginInput): Promise<string> => {
    try {
        if (!input.email || !input.password) {
            throw new Error("'email' e 'senha' são obrigatórios")
        }

        const user: user = await selectUserByEmail(input.email)

        if (!user) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const passwordIsCorrect: boolean = await compare(input.password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Usuário não encontrado ou senha incorreta")
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token;

    } catch (error) {
        throw new Error(error.message)
    }


}