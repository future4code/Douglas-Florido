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
const idGenerator_1 = __importDefault(require("../services/idGenerator"));
const types_1 = require("../types");
const hashManager_1 = require("../services/hashManager");
const getAddressInfo_1 = __importDefault(require("../services/getAddressInfo"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname, email, password, role } = req.body;
            const { CEP, numero, complemento } = req.body.address;
            if (!name || !nickname || !email || !password || !role || !CEP) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'name','nickname', 'password', 'email' e 'role'");
            }
            if (role.toUpperCase() !== types_1.userRole.ADMIN && role.toUpperCase() !== types_1.userRole.NORMAL) {
                res.statusCode = 422;
                throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN");
            }
            const [user] = yield connection_1.default('to_do_list_users')
                .where({ email });
            if (user) {
                res.statusCode = 409;
                throw new Error('Email já cadastrado');
            }
            const id = idGenerator_1.default();
            const cypherText = yield hashManager_1.hash(password);
            const newAddress = getAddressInfo_1.default(CEP, numero, complemento);
            const newUser = { id, name, nickname, email, password: cypherText, role, address: newAddress };
            yield connection_1.default('to_do_list_users')
                .insert(newUser);
            const token = authenticator_1.generateToken({ id, role });
            res.status(201).send({ token });
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" });
            }
            else {
                res.send({ message: error.message });
            }
        }
    });
}
exports.default = createUser;
