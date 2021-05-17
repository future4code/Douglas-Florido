import express from "express";
import { ImageController } from "../Controller/imageController";

export const imageRouter = express.Router();

const imageController = new ImageController();

imageRouter.post("/insert/:token", imageController.insert)
imageRouter.get("/all/:token", imageController.getAllImages)
imageRouter.get("/:token/:id", imageController.getImageByUserOrImageId)
imageRouter.get("/:token/", imageController.getImageByUserOrImageId)


