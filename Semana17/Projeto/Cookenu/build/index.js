"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const login_1 = __importDefault(require("./endpoints/login"));
const getProfile_1 = __importDefault(require("./endpoints/getProfile"));
const getAnotherUser_1 = __importDefault(require("./endpoints/getAnotherUser"));
const newRecipe_1 = __importDefault(require("./endpoints/newRecipe"));
const getRecipe_1 = __importDefault(require("./endpoints/getRecipe"));
app_1.default.post('/signup', createUser_1.default);
app_1.default.post('/login', login_1.default);
app_1.default.get('/user/profile', getProfile_1.default);
app_1.default.get('/user/:id', getAnotherUser_1.default);
app_1.default.get('/recipe/:id', getRecipe_1.default);
app_1.default.post('/recipe', newRecipe_1.default);
