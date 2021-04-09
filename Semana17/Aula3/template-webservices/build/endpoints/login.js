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
const hashManager_1 = require("../services/hashManager");
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                res.statusCode = 422;
                throw new Error("'email' e 'senha' são obrigatórios ");
            }
            const [user] = yield connection_1.default("to_do_list_users")
                .where({ email });
            const hashCompare = yield hashManager_1.compare(password, user.password);
            if (!user || !hashCompare) {
                res.statusCode = 401;
                throw new Error("Credenciais inválidas");
            }
            const token = authenticator_1.generateToken({ id: user.id, role: user.role });
            res.send({ token });
        }
        catch (error) {
            if (res.statusCode == 200) {
                res.status(500).send({ message: "Internal server error" });
            }
            else {
                res.send({ message: error.message });
            }
        }
    });
}
exports.default = login;
