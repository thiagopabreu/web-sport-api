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
exports.initJogoModel = exports.Jogo = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Jogo extends sequelize_1.Model {
}
exports.Jogo = Jogo;
function initJogoModel(force) {
    return __awaiter(this, void 0, void 0, function* () {
        Jogo.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            id_rodada_fk: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            data: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            hora: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            local: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            mandante: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            placar_mandante: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            visitante: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            placar_visitante: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'jogos',
            sequelize: database_1.sequelize
        });
        yield Jogo.sync({ force: force }).then(() => {
            console.log('tabela Jogos criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initJogoModel = initJogoModel;
exports.default = Jogo;
