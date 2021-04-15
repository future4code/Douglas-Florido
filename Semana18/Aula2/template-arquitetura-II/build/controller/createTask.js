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
exports.createTask = void 0;
const taskBusiness_1 = require("../business/taskBusiness");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, deadline, authorId } = req.body;
        yield taskBusiness_1.taskBusiness({ title, description, deadline, authorId });
        res.status(201).end();
    }
    catch (error) {
        res.statusMessage = error.message;
        res.status(500).end();
    }
});
exports.createTask = createTask;
//# sourceMappingURL=createTask.js.map