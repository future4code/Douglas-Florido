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
exports.ImageBusiness = void 0;
const InvalidInputError_1 = require("../Error/InvalidInputError");
class ImageBusiness {
    constructor(imageDatabase, idGenerator, hashManager, authenticator) {
        this.imageDatabase = imageDatabase;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
    }
    insertImage(image) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!image.subtitle || !image.URL) {
                throw new InvalidInputError_1.InvalidInputError("Invalid input to insert Image");
            }
            if (!image.token) {
                throw new InvalidInputError_1.InvalidInputError("Please Login Again");
            }
            const id = yield this.idGenerator.generateId();
            const tokenInfo = yield this.authenticator.getTokenData(image.token);
            yield this.imageDatabase.insertImage({ id, subtitle: image.subtitle, URL: image.URL, fk_user: tokenInfo.id });
        });
    }
    getImageById(image) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!image.token) {
                throw new InvalidInputError_1.InvalidInputError("Please Login Again");
            }
            const tokenInfo = yield this.authenticator.getTokenData(image.token);
            if (image.id === "" || !image.id) {
                const result = yield this.imageDatabase.getImagesOfUser(tokenInfo.id);
                return result;
            }
            else {
                const result = yield this.imageDatabase.getImageById(image.id);
                return result;
            }
        });
    }
    getAllImages(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                throw new InvalidInputError_1.InvalidInputError("Please Login Again");
            }
            const result = yield this.imageDatabase.getAllImages();
            return result;
        });
    }
}
exports.ImageBusiness = ImageBusiness;
//# sourceMappingURL=imageBusiness.js.map