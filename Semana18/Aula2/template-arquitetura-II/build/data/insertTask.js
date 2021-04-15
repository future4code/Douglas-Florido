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
exports.insertTask = void 0;
const connection_1 = require("../data/connection");
const insertTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.connection('to_do_list_tasks')
        .insert({
        id: task.id,
        title: task.title,
        description: task.description,
        deadline: task.deadline,
        author_id: task.authorId
    });
});
exports.insertTask = insertTask;
//# sourceMappingURL=insertTask.js.map