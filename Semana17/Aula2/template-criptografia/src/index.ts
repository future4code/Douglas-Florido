import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import {generateHash, compare} from './services/encryption'
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)


async function testar() {
let hash  = await generateHash("Douglas")

const res = await compare("Douglas", hash )

console.log(res)
}

testar()

