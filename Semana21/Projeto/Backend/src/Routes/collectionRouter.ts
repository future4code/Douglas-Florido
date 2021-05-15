import express from "express";
import { CollectionController } from "../Controller/collectionController";




export const collectionRouter = express.Router();

const collectionController = new CollectionController();

collectionRouter.put("/insert/:token", collectionController.insertCollection)
collectionRouter.put("/insert/relation/:token", collectionController.insertCollectionRelation)