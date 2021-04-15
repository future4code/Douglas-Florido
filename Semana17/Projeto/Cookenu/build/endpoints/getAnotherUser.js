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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../connection"));
const getAnotherUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchID = req.params.id;
        const token = req.headers.authorization;
        if (!searchID) {
            throw new Error("Invalid Params");
        }
        if (!token) {
            throw new Error("Token expired");
        }
        const user = yield connection_1.default.raw(`
        SELECT id, name, email FROM User
        WHERE (id = "${searchID}");
        `);
        if (!user) {
            throw new Error("No user found");
        }
        res.status(200).send(user[0]);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.default = getAnotherUser;
