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
exports.CollectionBusiness = void 0;
const InvalidInputError_1 = require("../Error/InvalidInputError");
const LoginAgain_1 = require("../Error/LoginAgain");
class CollectionBusiness {
    constructor(collectionDatabase, idGenerator, authenticator) {
        this.collectionDatabase = collectionDatabase;
        this.idGenerator = idGenerator;
        this.authenticator = authenticator;
    }
    insertCollection(collection) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!collection.title ||
                !collection.subtitle) {
                throw new InvalidInputError_1.InvalidInputError("Invalid input to insert Collection");
            }
            if (!collection.token) {
                throw new LoginAgain_1.LoginAgain("Token Invalid");
            }
            const id = yield this.idGenerator.generateId();
            const tokenInfo = yield this.authenticator.getTokenData(collection.token);
            yield this.collectionDatabase.insertCollection({
                id,
                title: collection.title,
                subtitle: collection.subtitle,
                author: tokenInfo.id
            });
        });
    }
    insertCollectionRelation(collectionRelation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!collectionRelation.id_collection || !collectionRelation.id_image) {
                throw new InvalidInputError_1.InvalidInputError("Invalid input to insert Collection Relation");
            }
            yield this.collectionDatabase.insertCollectionRelation(collectionRelation);
        });
    }
}
exports.CollectionBusiness = CollectionBusiness;
//# sourceMappingURL=collectionBusiness.js.map