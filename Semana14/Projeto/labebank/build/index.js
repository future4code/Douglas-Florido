"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
let users = [];
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
app.post('/new/user', (req, res) => {
    let errorCode = 400;
    try {
        let idNewUser = 1;
        users.map((u) => { idNewUser++; });
        const { name, cpf, dataDeNascimento } = req.body;
        console.log(req.body);
        const newUser = {
            id: idNewUser,
            name: name,
            cpf: cpf,
            dataDeNascimento: dataDeNascimento,
            saldo: 14,
            extrato: [],
        };
        if (!req.body) {
            errorCode = 422;
            throw new Error("Please Check the Fields");
        }
        users.push(newUser);
        res.status(201).send("Criado com Sucesso");
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
app.get('/users/all', (req, res) => {
    let errorCode = 400;
    try {
        res.status(200).send(users);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
