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
exports.connectToDatabase = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize(String(process.env.DATABASE), String(process.env.USER_DATABASE), String(process.env.USER_PASSWORD), {
    host: process.env.HOST_DATABASE,
    port: Number(process.env.PORT_DATABASE),
    dialect: 'mysql',
    dialectModule: require('mysql2')
});
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        exports.sequelize.authenticate().then(() => {
            console.log('Connection has been estaablishe successfully!');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.connectToDatabase = connectToDatabase;
exports.sequelize.sync()
    .then(() => {
    console.log('Tabelas Sincronizadas com sucesso!');
})
    .catch((error) => {
    console.error('Erro ao sincronizar tabelas: ', error);
});
