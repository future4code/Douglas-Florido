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
exports.signup = void 0;
const signupBusiness_1 = require("../business/signupBusiness");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, nickname, email, password, role } = req.body;
        const token = yield signupBusiness_1.signupBusiness({ name, nickname, email, password, role });
        res
            .status(201)
            .send({
            message: "Usuário criado!",
            token
        });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.signup = signup;
//# sourceMappingURL=signup.js.map