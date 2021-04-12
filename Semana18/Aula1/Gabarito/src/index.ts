import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import { signup } from './controller/signup'
import { createTask } from './controller/createTask'
import { getTaskById } from './controller/getTaskById'
import { login } from './controller/user/login'

console.log(process.env.DB_HOST);
const app = express()
app.use(express.json())
app.use(cors())

//criar meu router, com caminho /user

app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})