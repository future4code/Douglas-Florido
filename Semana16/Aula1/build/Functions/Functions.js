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
exports.getUserByType = exports.getCertainUser = void 0;
const server_1 = require("../Server/server");
exports.getCertainUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.query.title;
        let response = yield server_1.connection.raw(`
         SELECT * FROM aula48_exercicio
         WHERE (name LIKE "%${title}%");
         `);
        if (!response[0]) {
            throw new Error("Name not Found");
        }
        // console.log(response[0])
        res.status(200).send(response[0]);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getUserByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const type = req.params.type;
        let response = yield server_1.connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE (type = "${type}");
      `);
        res.status(200).send(response[0]);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
