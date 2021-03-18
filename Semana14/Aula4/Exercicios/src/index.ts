//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
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
]





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});


//Exercicio 1
//a)Qual método HTTP você deve utilizar para isso?
//r) utilizarei o método Get!

//b)Como você indicaria a entidade que está sendo manipulada?
//r)
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

//Exercicio 2


//a) Como você passou os parâmetros de type para a requisição? Por quê?
//r) eu criei um tipo para verificar dentro da própria requisição, para ter uma base para comparar os dados

//b) Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//r) sim, caso os tipos nao sejam iguais ao gabarito q eu criei entao eu jogo um erro, para o tipo dar certo
//colocamos um enum para garantir q só tenham 2s tipos

app.get("/search/type/:type", (req: Request, res: Response) => {


    let errorCode: number = 400;

    try {
        let type: string = req.params.type

        let myUser: object[] = []

        if (!(type === "ADMIN" || type === "NORMAL")) {
            throw new Error("Type not valid")
        }
        const myUsers = users
        myUsers.forEach(u => {
            if (u.type === type) {
                myUser.push(u)
            }
        });
        res.status(200).send(myUser)

    } catch (error) {

        res.status(errorCode).send(error.message);

    }


})


//Exercicio 3
//a) Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//r) o tipo é por path params utilizado, já q estamos usando get e não
//possui body

//b)Altere este endpoint para que ele devolva uma mensagem de erro caso
//nenhum usuário tenha sido encontrado.

app.get("/search/name/:name", (req: Request, res: Response) => {

    let errorCode: number = 400;
    
    try {

        let name: string = req.params.name
        console.log(name)
        // if(!name){
        //     throw new Error("Type not valid")
        // }
        const myUsers = users
        const searchedName = myUsers.find((u) => {return u.name === name })

        if(!searchedName){
            errorCode = 404
            throw new Error("Name Not Found")
        }

        res.status(200).send(searchedName)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})