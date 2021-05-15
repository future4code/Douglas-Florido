import express from "express";
import { ImageController } from "../Controller/imageController";

export const imageRouter = express.Router();

const imageController = new ImageController();

imageRouter.post("/insert/:token", imageController.insert)
imageRouter.get("/:token/:id", imageController.getImageById)
imageRouter.get("/:token/", imageController.getImageById)
