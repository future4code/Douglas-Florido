import * as bcrypt from 'bcryptjs';

export const encrypter = async (password: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt =  await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(password, salt)

    return result
}

export const verifier = async (password: string, realPassword: string): Promise<boolean> => await bcrypt.compare(password, realPassword)
    
