import { UserDatabase } from "../Data/userDatabase";
import { AuthenticationData, UserComplete, UserInput } from "../Entities/User";
import { InvalidInputError } from "../Error/InvalidInputError";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";
import { TokenManager } from "../Services/TokenManager";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: TokenManager        
    ){}
    
    async createUser(user: UserInput) { 
        if(!user.login || !user.password){
            throw new InvalidInputError("Invalid input to signUp")
        }

        const id = this.idGenerator.generateId()

        const hashPassword = await this.hashManager.hash(user.password)
       
        const inputData: UserComplete = {id, login: user.login, password: hashPassword}

        await this.userDatabase.createUser(inputData)        

        const accessToken = this.authenticator.generateToken({id, login: user.login})

        return accessToken
    }

    async loginUser(user: UserInput){
        if(!user.login || !user.password){
            throw new InvalidInputError("Please certify all fields are complete")
        }

        const userInfo = await this.userDatabase.login(user)

        const verification = await this.hashManager.compare(user.password, userInfo.password)
        
        if(!verification){
            throw new Error("Login or Password Incorrect")
        }

        else{
            const accessToken = this.authenticator.generateToken({id: userInfo.id, login: userInfo.login})
            return accessToken
        }        

    }

}