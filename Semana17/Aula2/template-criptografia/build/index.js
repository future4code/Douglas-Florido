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
const app_1 = __importDefault(require("./app"));
const editUser_1 = __importDefault(require("./endpoints/editUser"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const login_1 = __importDefault(require("./endpoints/login"));
const encryption_1 = require("./services/encryption");
app_1.default.post('/user/signup', createUser_1.default);
app_1.default.post('/user/login', login_1.default);
app_1.default.put('/user/edit', editUser_1.default);
function testar() {
    return __awaiter(this, void 0, void 0, function* () {
        let hash = yield encryption_1.generateHash("Douglas");
        const res = yield encryption_1.compare("Douglas", hash);
        console.log(res);
    });
}
testar();
