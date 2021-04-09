import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import {encrypter} from './services/encrypter'

app.post('/signup', createUser)
app.post('/login', login)
app.put('/user/edit', editUser)

// encrypter("Danilo")
