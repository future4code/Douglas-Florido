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
exports.taskBusiness = void 0;
const idGenerator_1 = require("../services/idGenerator");
const insertTask_1 = require("../data/insertTask");
function taskBusiness(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!input.title ||
                !input.description ||
                !input.deadline ||
                !input.authorId) {
                throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios');
            }
            const id = idGenerator_1.generateId();
            yield insertTask_1.insertTask({
                id,
                title: input.title,
                description: input.description,
                deadline: input.deadline,
                authorId: input.authorId,
            });
        }
        catch (error) {
        }
    });
}
exports.taskBusiness = taskBusiness;
//# sourceMappingURL=taskBusiness.js.map