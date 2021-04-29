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
exports.UserBusiness = void 0;
const CustomError_1 = require("../errors/CustomError");
const User_1 = require("../model/User");
const UserDatabase_1 = __importDefault(require("../data/UserDatabase"));
const hashGenerator_1 = __importDefault(require("../services/hashGenerator"));
const idGenerator_1 = __importDefault(require("../services/idGenerator"));
const tokenGenerator_1 = __importDefault(require("../services/tokenGenerator"));
const UserDatabase_2 = __importDefault(require("../data/UserDatabase"));
class UserBusiness {
    signup(name, email, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name || !email || !password || !role) {
                    throw new CustomError_1.CustomError(422, "Missing input");
                }
                if (email.indexOf("@") === -1) {
                    throw new CustomError_1.CustomError(422, "Invalid email");
                }
                if (password.length < 6) {
                    throw new CustomError_1.CustomError(422, "Invalid password");
                }
                const id = idGenerator_1.default.generate();
                const cypherPassword = yield hashGenerator_1.default.hash(password);
                yield UserDatabase_1.default.createUser(new User_1.User(id, name, email, cypherPassword, User_1.stringToUserRole(role)));
                const accessToken = tokenGenerator_1.default.generate({
                    id,
                    role,
                });
                return { accessToken };
            }
            catch (error) {
                if (error.message.includes("key 'email'")) {
                    throw new CustomError_1.CustomError(409, "Email already in use");
                }
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!email || !password) {
                    throw new CustomError_1.CustomError(422, "Missing input");
                }
                const user = yield UserDatabase_1.default.getUserByEmail(email);
                if (!user) {
                    throw new CustomError_1.CustomError(401, "Invalid credentials");
                }
                const isPasswordCorrect = yield hashGenerator_1.default.compareHash(password, user.getPassword());
                if (!isPasswordCorrect) {
                    throw new CustomError_1.CustomError(401, "Invalid credentials");
                }
                const accessToken = tokenGenerator_1.default.generate({
                    id: user.getId(),
                    role: user.getRole(),
                });
                return { accessToken };
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserDatabase_2.default.getUserById(id);
                if (!user) {
                    throw new CustomError_1.CustomError(402, "Id not a String");
                }
                return {
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    role: user.getRole(),
                };
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
}
exports.UserBusiness = UserBusiness;
exports.default = new UserBusiness();
//# sourceMappingURL=UserBusiness.js.map