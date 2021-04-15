"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const authenticator_1 = require("../services/authenticator");
const newRecipe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("Token expired");
        }
        if (!title || !description) {
            throw new Error("Check your fields");
        }
        let date = new Date().toISOString().slice(0, 10);
        let email = authenticator_1.getTokenData(token);
        if (!email) {
            throw new Error("Token expired");
        }
        email = email.result.email;
        let idUser = yield connection_1.default.raw(`
            SELECT id FROM User WHERE (email = "${email}");
            `);
        idUser = idUser[0][0].id;
        let newId = yield connection_1.default.raw(`
            SELECT id FROM Recipe;
            `);
        newId = newId[0].length + 1;
        yield connection_1.default.raw(`            
            INSERT INTO Recipe (id, name, description, creation_date, fk_user)
            VALUES(${newId}, "${title}", "${description}", "${date}",${idUser} )
            `);
        res.status(201).send("Recipe Successfully Created");
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.default = newRecipe;
