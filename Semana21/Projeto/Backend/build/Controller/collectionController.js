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
exports.CollectionController = void 0;
const collectionBusiness_1 = require("../Business/collectionBusiness");
const BaseDatabase_1 = require("../Data/BaseDatabase");
const CollectionDatabase_1 = require("../Data/CollectionDatabase");
const IdGenerator_1 = require("../Services/IdGenerator");
const TokenManager_1 = require("../Services/TokenManager");
class CollectionController {
    insertCollection(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    title: req.body.title,
                    subtitle: req.body.subtitle,
                    token: req.params.token
                };
                const collectionBusiness = new collectionBusiness_1.CollectionBusiness(new CollectionDatabase_1.CollectionDatabase, new IdGenerator_1.IdGenerator, new TokenManager_1.TokenManager);
                yield collectionBusiness.insertCollection(input);
                res.status(201).send("Inserted Successfully");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    insertCollectionRelation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id_collection: req.body.id_collection,
                    id_image: req.body.id_image
                };
                const collectionBusiness = new collectionBusiness_1.CollectionBusiness(new CollectionDatabase_1.CollectionDatabase, new IdGenerator_1.IdGenerator, new TokenManager_1.TokenManager);
                yield collectionBusiness.insertCollectionRelation(input);
                res.status(201).send("Inserted Relation Successfully");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.CollectionController = CollectionController;
//# sourceMappingURL=collectionController.js.map