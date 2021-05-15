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
exports.UserController = void 0;
const userBusiness_1 = require("../Business/userBusiness");
const BaseDatabase_1 = require("../Data/BaseDatabase");
const userDatabase_1 = require("../Data/userDatabase");
const HashManager_1 = require("../Services/HashManager");
const IdGenerator_1 = require("../Services/IdGenerator");
const TokenManager_1 = require("../Services/TokenManager");
class UserController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    login: req.body.login,
                    password: req.body.password,
                };
                const userBusiness = new userBusiness_1.UserBusiness(new userDatabase_1.UserDatabase, new IdGenerator_1.IdGenerator, new HashManager_1.HashManager, new TokenManager_1.TokenManager);
                const token = yield userBusiness.createUser(input);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    login: req.body.login,
                    password: req.body.password
                };
                const userBusiness = new userBusiness_1.UserBusiness(new userDatabase_1.UserDatabase, new IdGenerator_1.IdGenerator, new HashManager_1.HashManager, new TokenManager_1.TokenManager);
                const token = yield userBusiness.loginUser(input);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map