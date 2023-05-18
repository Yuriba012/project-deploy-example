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
const UsersBusiness_1 = require("./business/UsersBusiness");
const UsersDatabase_1 = require("./database/UsersDatabase");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
const usersBusiness = new UsersBusiness_1.UsersBusiness(new UsersDatabase_1.UsersDatabase);
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const output = yield usersBusiness.getUsers();
        res.status(200).send(output);
    }
    catch (error) {
        console.log(error);
    }
}));
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        const output = yield usersBusiness.createUser(input);
        res.status(200).send(output);
    }
    catch (error) {
        console.log(error);
    }
}));
