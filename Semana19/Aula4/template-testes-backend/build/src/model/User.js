"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_ROLES = exports.stringToUserRole = exports.User = void 0;
const CustomError_1 = require("../errors/CustomError");
class User {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
}
exports.User = User;
exports.stringToUserRole = (input) => {
    switch (input) {
        case "NORMAL":
            return USER_ROLES.NORMAL;
        case "ADMIN":
            return USER_ROLES.ADMIN;
        default:
            throw new CustomError_1.CustomError(422, "Invalid user role");
    }
};
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["NORMAL"] = "NORMAL";
    USER_ROLES["ADMIN"] = "ADMIN";
})(USER_ROLES = exports.USER_ROLES || (exports.USER_ROLES = {}));
//# sourceMappingURL=User.js.map