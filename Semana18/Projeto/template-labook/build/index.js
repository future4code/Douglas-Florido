"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt = __importStar(require("bcryptjs"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
exports.connection = knex_1.default({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    }
});
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
var POST_TYPES;
(function (POST_TYPES) {
    POST_TYPES["NORMAL"] = "normal";
    POST_TYPES["EVENT"] = "event";
})(POST_TYPES || (POST_TYPES = {}));
const generateId = () => uuid_1.v4();
function generateToken(payload) {
    return jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}
function getTokenData(token) {
    const result = jwt.verify(token, process.env.JWT_KEY);
    return { id: result.id, };
}
const hash = (plainText) => __awaiter(void 0, void 0, void 0, function* () {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = yield bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt);
});
const compare = (plainText, cypherText) => __awaiter(void 0, void 0, void 0, function* () {
    return bcrypt.compare(plainText, cypherText);
});
app.post('/users/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let message = "Success!";
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.statusCode = 406;
            message = '"name", "email" and "password" must be provided';
            throw new Error(message);
        }
        const id = generateId();
        const cypherPassword = yield hash(password);
        yield exports.connection('labook_users')
            .insert({
            id,
            name,
            email,
            password: cypherPassword
        });
        const token = generateToken({ id });
        res.status(201).send({ message, token });
    }
    catch (error) {
        res.statusCode = 400;
        let message = error.sqlMessage || error.message;
        res.send({ message });
    }
}));
app.post('/users/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let message = "Success!";
        const { email, password } = req.body;
        if (!email || !password) {
            res.statusCode = 406;
            message = '"email" and "password" must be provided';
            throw new Error(message);
        }
        const queryResult = yield exports.connection("labook_users")
            .select("*")
            .where({ email });
        if (!queryResult[0]) {
            res.statusCode = 401;
            message = "Invalid credentials";
            throw new Error(message);
        }
        const user = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        };
        const passwordIsCorrect = yield compare(password, user.password);
        if (!passwordIsCorrect) {
            res.statusCode = 401;
            message = "Invalid credentials";
            throw new Error(message);
        }
        const token = generateToken({
            id: user.id
        });
        res.status(200).send({ message, token });
    }
    catch (error) {
        let message = error.sqlMessage || error.message;
        res.statusCode = 400;
        res.send({ message });
    }
}));
app.post('/posts/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let message = "Success!";
        const { photo, description, type } = req.body;
        const token = req.headers.authorization;
        const tokenData = getTokenData(token);
        const id = generateId();
        yield exports.connection("labook_posts")
            .insert({
            id,
            photo,
            description,
            type,
            author_id: tokenData.id
        });
        res.status(201).send({ message });
    }
    catch (error) {
        let message = error.sqlMessage || error.message;
        res.statusCode = 400;
        res.send({ message });
    }
}));
app.get('/posts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let message = "Success!";
        const { id } = req.params;
        const queryResult = yield exports.connection("labook_posts")
            .select("*")
            .where({ id });
        if (!queryResult[0]) {
            res.statusCode = 404;
            message = "Post not found";
            throw new Error(message);
        }
        const post = {
            id: queryResult[0].id,
            photo: queryResult[0].photo,
            description: queryResult[0].description,
            type: queryResult[0].type,
            createdAt: queryResult[0].created_at,
            authorId: queryResult[0].author_id,
        };
        res.status(200).send({ message, post });
    }
    catch (error) {
        let message = error.sqlMessage || error.message;
        res.statusCode = 400;
        res.send({ message });
    }
}));
app.listen(3003, () => {
    console.log("Server running on port 3003");
});
//# sourceMappingURL=index.js.map