"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./Server/server");
const Functions_1 = require("./Functions/Functions");
server_1.server;
server_1.app.get("/users/search", Functions_1.getCertainUser);
server_1.app.get("/users/:type", Functions_1.getUserByType);
