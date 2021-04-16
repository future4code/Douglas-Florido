import app from "./app"

import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getProfile from './endpoints/getProfile'
import getAnotherUser from './endpoints/getAnotherUser'
import newRecipe from './endpoints/newRecipe'
import getRecipe from './endpoints/getRecipe'
import {encrypter} from './services/encrypter'

app.post('/signup', createUser)
app.post('/login', login)
app.get('/user/profile', getProfile )
app.get('/user/:id', getAnotherUser)
app.get('/recipe/:id', getRecipe)
app.post('/recipe', newRecipe)

