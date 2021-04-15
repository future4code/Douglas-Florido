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
exports.signupBusiness = void 0;
const user_1 = require("../model/user");
const idGenerator_1 = require("../services/idGenerator");
const hashManager_1 = require("../services/hashManager");
const insertUser_1 = require("../data/insertUser");
const authenticator_1 = require("../services/authenticator");
function signupBusiness(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!input.name ||
                !input.nickname ||
                !input.email ||
                !input.password ||
                !input.role) {
                throw new Error('Preencha os campos "name","nickname", "email" e "password"');
            }
            const id = idGenerator_1.generateId();
            const cypherPassword = yield hashManager_1.hash(input.password);
            yield insertUser_1.insertUser({
                id,
                name: input.name,
                nickname: input.nickname,
                email: input.email,
                password: cypherPassword,
                role: user_1.convertStringToUserRole(input.role)
            });
            const token = authenticator_1.generateToken({
                id,
                role: user_1.convertStringToUserRole(input.role)
            });
            return token;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.signupBusiness = signupBusiness;
//# sourceMappingURL=signupBusiness.js.map