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
exports.initRodadasModel = exports.Rodadas = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Rodadas extends sequelize_1.Model {
}
exports.Rodadas = Rodadas;
function initRodadasModel(force) {
    return __awaiter(this, void 0, void 0, function* () {
        Rodadas.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            id_campeonato_fk: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            numero_rodada: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'rodadas',
            sequelize: database_1.sequelize
        });
        yield Rodadas.sync({ force: force }).then(() => {
            console.log('tabela Rodadas criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initRodadasModel = initRodadasModel;
exports.default = Rodadas;
