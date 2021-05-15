import express from "express";
import { UserController } from "../Controller/userController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)