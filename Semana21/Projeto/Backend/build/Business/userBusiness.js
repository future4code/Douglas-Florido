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
exports.UserBusiness = void 0;
const InvalidInputError_1 = require("../Error/InvalidInputError");
class UserBusiness {
    constructor(userDatabase, idGenerator, hashManager, authenticator) {
        this.userDatabase = userDatabase;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user.login || !user.password) {
                throw new InvalidInputError_1.InvalidInputError("Invalid input to signUp");
            }
            const id = this.idGenerator.generateId();
            const hashPassword = yield this.hashManager.hash(user.password);
            const inputData = { id, login: user.login, password: hashPassword };
            yield this.userDatabase.createUser(inputData);
            const accessToken = this.authenticator.generateToken({ id, login: user.login });
            return accessToken;
        });
    }
    loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user.login || !user.password) {
                throw new InvalidInputError_1.InvalidInputError("Please certify all fields are complete");
            }
            const userInfo = yield this.userDatabase.login(user);
            const verification = yield this.hashManager.compare(user.password, userInfo.password);
            if (!verification) {
                throw new Error("Login or Password Incorrect");
            }
            else {
                const accessToken = this.authenticator.generateToken({ id: userInfo.id, login: userInfo.login });
                return accessToken;
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=userBusiness.js.map