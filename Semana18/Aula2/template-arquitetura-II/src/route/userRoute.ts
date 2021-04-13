import express from 'express'
import { login } from '../controller/login';
import { signup } from '../controller/signup';

const userRoute = express.Router();

userRoute.post("/signup", signup)
userRoute.post('/login', login)

export default userRoute