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
const connection_1 = __importDefault(require("./connection"));
app_1.default.put("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield connection_1.default.raw(`
        INSERT INTO Users (name,nickname,email)
        VALUES(            
            "${req.body.name}",
            "${req.body.nickname}",
            "${req.body.email}"
            );    
            `);
        console.log(req.body);
        res.status(201).send(response);
    }
    catch (error) {
        console.log(error.message);
        res.status(400).send(error);
    }
}));
app_1.default.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield connection_1.default.raw(`
        SELECT * FROM Users
        WHERE (${req.params.id} = id);
        `);
        res.status(200).send(response);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app_1.default.post("/user/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield connection_1.default.raw(`
            UPDATE Users SET
            name = "${req.body.name}",
            nickname = "${req.body.nickname}",
            email = "${req.body.email}"
            WHERE id = ${req.params.id};
            `);
        res.status(200).send("Updated Successfully");
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
app_1.default.put("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body) {
            console.log("Data_Limite: ", req.body.data_limite);
            let transformar = req.body.data_limite.split("/");
            let data_nova = transformar[2] + "-" + transformar[1] + "-" + transformar[0];
            console.log("Data COlocada no banco: ", data_nova);
            const response = yield connection_1.default.raw(`
            INSERT INTO Tasks (titulo,descricao,data_limite,status,user_id)
            VALUES(            
            "${req.body.titulo}",
            "${req.body.descricao}",
            "${data_nova}",
            "${req.body.status}",            
            "${req.body.user_id}"
            );    
            `);
            res.status(201).send(response);
        }
        else {
            res.status(400).send("Check fields");
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=index.js.map