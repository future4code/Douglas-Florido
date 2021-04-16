"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idcreator = void 0;
const uuid_1 = require("uuid");
function idcreator() {
    return uuid_1.v4();
}
exports.idcreator = idcreator;
console.log("Generated Id: ", idcreator);
exports.default = idcreator;
