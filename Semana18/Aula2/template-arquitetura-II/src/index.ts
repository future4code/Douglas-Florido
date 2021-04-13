import express from 'express'
import cors from 'cors'
import { signup } from './controller/signup'
import { createTask } from './controller/createTask'
import { getTaskById } from './controller/getTaskById'
import { login } from './controller/login'
import taskRoute from './route/taskRoute'
import userRoute from './route/userRoute'

const app = express()

app.use(express.json())
app.use(cors())


app.use('/user', userRoute)
app.use('/task', taskRoute)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})