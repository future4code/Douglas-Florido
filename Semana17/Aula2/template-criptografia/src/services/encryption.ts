import * as bcrypt from "bcryptjs";


//Exercicio 1, b)

export const generateHash = async(s: string): Promise<string> => {

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result: string = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);

return result

}

//Exercicio 1, c)

export const compare = async(s: string, hash: string): Promise<boolean> => {
    // console.log(hash)
    return bcrypt.compare(s, hash);
  }