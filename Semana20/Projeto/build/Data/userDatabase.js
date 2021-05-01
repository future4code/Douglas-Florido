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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const TableNames_1 = require("../Constants/TableNames");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
                INSERT INTO ${TableNames_1.UserTable} (id, login, password)
                VALUES ("${user.id}", "${user.login}", "${user.password}");
                `);
                console.log("Insertion Completed!");
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`
            SELECT id, password FROM  ${TableNames_1.UserTable}
            WHERE (login LIKE "${user.login}")            
            `);
                if (!result[0][0]) {
                    throw new Error("Login or Password Incorrect");
                }
                return ({ id: result[0][0].id, password: result[0][0].password });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=userDatabase.js.map