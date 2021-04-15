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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginBusiness = void 0;
const selectUserByEmail_1 = require("../data/selectUserByEmail");
const hashManager_1 = require("../services/hashManager");
const authenticator_1 = require("../services/authenticator");
function loginBusiness(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!input.email || !input.password) {
                throw new Error("'email' e 'senha' são obrigatórios");
            }
            const user = yield selectUserByEmail_1.selectUserByEmail(input.email);
            if (!user) {
                throw new Error("Usuário não encontrado ou senha incorreta");
            }
            const passwordIsCorrect = yield hashManager_1.compare(input.password, user.password);
            if (!passwordIsCorrect) {
                throw new Error("Usuário não encontrado ou senha incorreta");
            }
            const token = authenticator_1.generateToken({
                id: user.id,
                role: user.role
            });
            return token;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.loginBusiness = loginBusiness;
//# sourceMappingURL=loginBusiness.js.map