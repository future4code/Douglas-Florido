"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const signup_1 = require("./controller/signup");
const createTask_1 = require("./controller/createTask");
const getTaskById_1 = require("./controller/getTaskById");
const login_1 = require("./controller/login");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.post('/user/signup', signup_1.signup);
app.post('/user/login', login_1.login);
app.put('/task', createTask_1.createTask);
app.get('/task/:id', getTaskById_1.getTaskById);
app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003');
});
//# sourceMappingURL=index.js.map