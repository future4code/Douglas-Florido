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
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw new Error("E-mail or password void");
            }
            let realPassword = yield connection_1.default.raw(`
         SELECT password FROM User WHERE (email = "${email}");
         `);
            let enterOrNot = encrypter_1.verifier(password, realPassword);
            if (!enterOrNot) {
                throw new Error("E-mail or Password incorrect");
            }
            let token = authenticator_1.generateToken({ email });
            res.status(200).send(token);
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.default = login;
