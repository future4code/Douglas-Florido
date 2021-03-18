"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importando express com Request e Response e cors
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//iniciando a aplicação web com express
const app = express_1.default();
//ativando os módulos de Bodyparser e cors
app.use(express_1.default.json());
app.use(cors_1.default());
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
];
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//Exercicio 1
//a)Qual método HTTP você deve utilizar para isso?
//r) utilizarei o método Get!
//b)Como você indicaria a entidade que está sendo manipulada?
//r)
app.get("/users", (req, res) => {
    res.status(200).send(users);
});
//Exercicio 2
//a) Como você passou os parâmetros de type para a requisição? Por quê?
//r) eu criei um tipo para verificar dentro da própria requisição, para ter uma base para comparar os dados
//b) Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//r) sim, caso os tipos nao sejam iguais ao gabarito q eu criei entao eu jogo um erro, para o tipo dar certo
//colocamos um enum para garantir q só tenham 2s tipos
app.get("/search/:type", (req, res) => {
    let errorCode = 400;
    try {
        let type = req.params.type;
        let myUser = [];
        if (!(type === "ADMIN" || type === "NORMAL")) {
            throw new Error("Type not valid");
        }
        const myUsers = users;
        myUsers.forEach(u => {
            if (u.type === type) {
                myUser.push(u);
            }
        });
        res.status(200).send(myUser);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
