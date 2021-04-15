"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToUserRole = exports.USER_ROLES = void 0;
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["NORMAL"] = "NORMAL";
    USER_ROLES["ADMIN"] = "ADMIN";
})(USER_ROLES = exports.USER_ROLES || (exports.USER_ROLES = {}));
function convertStringToUserRole(role) {
    switch (role) {
        case "NORMAL":
            return USER_ROLES.NORMAL;
        case "ADMIN":
            return USER_ROLES.ADMIN;
        default:
            throw new Error("O user role precisa ser 'NORMAL' ou 'ADMIN'");
    }
}
exports.convertStringToUserRole = convertStringToUserRole;
//# sourceMappingURL=user.js.map