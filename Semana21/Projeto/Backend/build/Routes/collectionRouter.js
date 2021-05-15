"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionRouter = void 0;
const express_1 = __importDefault(require("express"));
const collectionController_1 = require("../Controller/collectionController");
exports.collectionRouter = express_1.default.Router();
const collectionController = new collectionController_1.CollectionController();
exports.collectionRouter.put("/insert/:token", collectionController.insertCollection);
exports.collectionRouter.put("/insert/relation/:token", collectionController.insertCollectionRelation);
//# sourceMappingURL=collectionRouter.js.map