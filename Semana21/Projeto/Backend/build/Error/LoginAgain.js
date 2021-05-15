"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAgain = void 0;
const BaseError_1 = require("./BaseError");
class LoginAgain extends BaseError_1.BaseError {
    constructor(message) {
        super(message, 401);
    }
}
exports.LoginAgain = LoginAgain;
//# sourceMappingURL=LoginAgain.js.map