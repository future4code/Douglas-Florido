import express, { Request, Response, response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();
app.use(express.json());
app.use(cors());


app.get('/countries/all', (req: Request, res:Response) => {

    res.status(201).send(countries);

})

app.get('/countries/:id', (req: Request, res: Response) => {

    const id: number = Number(req.params.id);

    const countryIWant = countries.find((count) => {
        return count.id === id;
    })

    res.status(200).send(countryIWant);  

})

app.get('/countries/search', (req: Request, res: Response) => {
    
})

app.listen(3003, () => {
    console.log("Servidor rodando no endereço http://localhost:3003");
});

