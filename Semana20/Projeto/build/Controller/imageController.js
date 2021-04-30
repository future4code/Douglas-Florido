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
exports.ImageController = void 0;
const BaseDatabase_1 = require("../Data/BaseDatabase");
const imageBusiness_1 = require("../Business/imageBusiness");
const imageDatabase_1 = require("../Data/imageDatabase");
const IdGenerator_1 = require("../Services/IdGenerator");
const HashManager_1 = require("../Services/HashManager");
const TokenManager_1 = require("../Services/TokenManager");
class ImageController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    subtitle: req.body.subtitle,
                    URL: req.body.URL,
                };
                const token = req.params.token;
                const imageBusiness = new imageBusiness_1.ImageBusiness(new imageDatabase_1.ImageDatabase, new IdGenerator_1.IdGenerator, new HashManager_1.HashManager, new TokenManager_1.TokenManager);
                yield imageBusiness.insertImage({ token: token, subtitle: input.subtitle, URL: input.URL });
                res.status(201).send("Inserted Successfully");
                yield BaseDatabase_1.BaseDatabase.destroyConnection();
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.ImageController = ImageController;
//# sourceMappingURL=imageController.js.map