"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRouter_1 = require("./Routes/userRouter");
const imageRouter_1 = require("./Routes/imageRouter");
const collectionRouter_1 = require("./Routes/collectionRouter");
dotenv_1.default.config();
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.listen(3003, () => {
    console.log("Server running on port 3003");
});
app.use("/user", userRouter_1.userRouter);
app.use("/image", imageRouter_1.imageRouter);
app.use("/collection", collectionRouter_1.collectionRouter);
//# sourceMappingURL=index.js.map