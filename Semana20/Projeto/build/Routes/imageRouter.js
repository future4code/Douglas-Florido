"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageRouter = void 0;
const express_1 = __importDefault(require("express"));
const imageController_1 = require("../Controller/imageController");
exports.imageRouter = express_1.default.Router();
const imageController = new imageController_1.ImageController();
exports.imageRouter.post("/insert/:token", imageController.insert);
exports.imageRouter.get("/:token/:id", imageController.getMusicById);
//# sourceMappingURL=imageRouter.js.map