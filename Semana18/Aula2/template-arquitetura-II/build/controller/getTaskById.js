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
exports.getTaskById = void 0;
const selectTaskById_1 = require("../data/selectTaskById");
const getTaskById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield selectTaskById_1.selectTaskById(id);
        if (!result) {
            throw new Error("Tarefa não encontrada");
        }
        const taskWithUserInfo = {
            id: result.id,
            title: result.title,
            description: result.description,
            deadline: result.deadline,
            status: result.status,
            authorId: result.author_id,
            authorNickname: result.nickname
        };
        res.status(200).send(taskWithUserInfo);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.getTaskById = getTaskById;
//# sourceMappingURL=getTaskById.js.map