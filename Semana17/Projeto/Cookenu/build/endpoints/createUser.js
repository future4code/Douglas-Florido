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
const encrypter_1 = require("../services/encrypter");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, name, email, password } = req.body;
            if (!id || !name || !email || !password) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'id', 'name', 'email' e 'password'");
            }
            let encriptedPassword = yield encrypter_1.encrypter(password);
            const result = yield connection_1.default.raw(`
         INSERT INTO User (id, name, email, password)
         VALUES (${id}, "${name}", "${email}", "${encriptedPassword}");
         `);
            console.log(`${id}`, typeof (`${id}`));
            let token = authenticator_1.generateToken({ id });
            console.log("token: ", token);
            res.status(201).send(token);
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.default = createUser;
