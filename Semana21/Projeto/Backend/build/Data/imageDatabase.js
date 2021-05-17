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
exports.ImageDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ImageDatabase extends BaseDatabase_1.BaseDatabase {
    insertImage(image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
                INSERT INTO ${this.tableNames.images} (id, subtitle, URL, fk_user)
                VALUES ("${image.id}", "${image.subtitle}", "${image.URL}", "${image.fk_user}");
                `);
                console.log("Insertion Completed!");
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getImagesOfUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`
            SELECT * FROM ${this.tableNames.images}
            WHERE ( fk_user = "${id}");
            `);
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getImageById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`
            SELECT * FROM ${this.tableNames.images}
            WHERE ( id = "${id}");
            `);
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllImages() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`
            Select * FROM ${this.tableNames.images};
            `);
                console.log(result[0]);
                return result[0];
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ImageDatabase = ImageDatabase;
//# sourceMappingURL=imageDatabase.js.map