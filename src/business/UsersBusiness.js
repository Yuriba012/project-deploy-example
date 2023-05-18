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
exports.UsersBusiness = void 0;
class UsersBusiness {
    constructor(usersDatabase) {
        this.usersDatabase = usersDatabase;
        this.getUsers = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.usersDatabase.getUsers();
            return users;
        });
        this.createUser = (input) => __awaiter(this, void 0, void 0, function* () {
            const inputDB = {
                id: new Date().toISOString(),
                name: input.name,
                email: input.email,
                password: input.password,
                role: 'NORMAL'
            };
            yield this.usersDatabase.createUser(inputDB);
            return ({
                message: "usuário criado com sucesso."
            });
        });
    }
}
exports.UsersBusiness = UsersBusiness;
