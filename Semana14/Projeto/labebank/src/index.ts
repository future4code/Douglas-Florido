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
    cpf: number,
    dataDeNascimento: string,
    saldo: number,
    extrato: Extrato[],

}

type Extrato = {
    valor: number,
    data: string,
    descricao: string,
}

let users: user[] = [
    // {
    //     id: 1,
    //     name: "Douglão",
    //     cpf: 653666555,
    //     dataDeNascimento: '02061995',
    //     saldo: 6000,
    //     extrato: [
    //         {
    //             valor: 3000,
    //             data: '10012021',
    //             descricao: 'Contas de Janeiro',
    //         },
    //         {
    //             valor: 3000,
    //             data: '10022021',
    //             descricao: 'Contas de Fevereiro',
    //         }
    //     ],
    // },

    // {
    //     id: 2,
    //     name: "Felipe Moura Brasil",
    //     cpf: 10011110,
    //     dataDeNascimento: '16112001',
    //     saldo: 999,
    //     extrato: [
    //         {
    //             valor: 363,
    //             data: '16112020',
    //             descricao: '00101001011001110011111',
    //         },
    //         {
    //             valor: 636,
    //             data: '21032021',
    //             descricao: '11101001001001110100001',
    //         }
    //     ],
    // },


]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.post('/new/user', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        //nome, CPF e data de nascimento
        let idNewUser = 1
        users.map((u) =>{idNewUser++})
        // console.log(idNewUser)
        
        const {name, cpf, dataDeNascimento} = req.body
        console.log(req.body)

        const newUser: user = {            
            id: idNewUser,
            name: name,
            cpf: cpf,
            dataDeNascimento: dataDeNascimento,
            saldo: 14,
            extrato: [],
        }
        if(!req.body){
            
            errorCode=422
            throw new Error("Please Check the Fields")
        }
        users.push(newUser)
        
        res.status(201).send("Criado com Sucesso")

        
    } catch (error) {
       res.status(errorCode).send(error.message)
    }
})

app.get('/users/all', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        // users.map((u) => {console.log(u)})
        res.status(200).send(users)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})
