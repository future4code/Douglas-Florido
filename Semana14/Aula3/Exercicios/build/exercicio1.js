"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var countries_1 = require("./countries");
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get('/countries/all', function (req, res) {
    res.status(201).send(countries_1.countries);
});
app.get('/countries/:id', function (req, res) {
    var id = Number(req.params.id);
    var countryIWant = countries_1.countries.find(function (count) {
        return count.id === id;
    });
    res.status(200).send(countryIWant);
});
app.get('/countries/search');
app.listen(3003, function () {
    console.log("Servidor rodando no endereço http://localhost:3003");
});
//# sourceMappingURL=exercicio1.js.map