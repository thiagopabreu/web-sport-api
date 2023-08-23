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
exports.initAdminModel = exports.Admin = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
class Admin extends sequelize_1.Model {
    comparePassword(password, passwordBD) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield bcrypt_1.default.compare(password, passwordBD);
            console.log(result);
            return result;
        });
    }
}
exports.Admin = Admin;
function initAdminModel() {
    return __awaiter(this, void 0, void 0, function* () {
        Admin.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            user: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            senha: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'admin-senha',
            sequelize: database_1.sequelize
        });
        Admin.beforeCreate((user) => __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(user.senha, 10);
            user.senha = hashedPassword;
        }));
        yield Admin.sync().then(() => {
            console.log('tabela admin-senha criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initAdminModel = initAdminModel;
