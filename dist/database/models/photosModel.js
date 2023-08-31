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
exports.initFotoModel = exports.Foto = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Foto extends sequelize_1.Model {
}
exports.Foto = Foto;
function initFotoModel(force) {
    return __awaiter(this, void 0, void 0, function* () {
        Foto.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            caminho: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'foto',
            sequelize: database_1.sequelize
        });
        yield Foto.sync({ force: force }).then(() => {
            console.log('tabela foto criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initFotoModel = initFotoModel;
