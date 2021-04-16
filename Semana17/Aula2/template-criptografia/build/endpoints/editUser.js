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
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname } = req.body;
            const tokenData = authenticator_1.getTokenData(req.headers.authorization);
            if (!tokenData) {
                res.statusCode = 401;
                throw new Error();
            }
            if (!name && !nickname) {
                res.statusCode = 422;
                res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'";
                throw new Error();
            }
            yield connection_1.default('to_do_list_users')
                .update({ name, nickname })
                .where({ id: tokenData.id });
            res.end();
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).end();
            }
            res.end();
        }
    });
}
exports.default = createUser;
