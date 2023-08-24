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
exports.UserAdminController = void 0;
const userAdminModel_1 = require("../database/models/userAdminModel");
class UserAdminController {
    registerUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user, senha } = request.body;
                const newUser = yield userAdminModel_1.Admin.create({ user, senha });
                response.status(201).json(newUser);
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    login(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { user, senha } = request.body;
                const userRequested = yield userAdminModel_1.Admin.findOne({ where: { user } });
                if (!userRequested || !(yield userRequested.comparePassword(senha, userRequested.senha))) {
                    response.status(401).json({ error: 'Invalid email or password! ', user: false });
                }
                else {
                    response.status(200).json({ message: 'Authentication sucessful! ', user: true });
                }
            }
            catch (error) {
                console.log(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = request.params;
            try {
                const responseAdmin = yield userAdminModel_1.Admin.destroy({ where: { id: id } });
                response.status(200).json({ responseAdmin });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
}
exports.UserAdminController = UserAdminController;
