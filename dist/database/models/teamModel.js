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
exports.initTimeModel = exports.Time = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Time extends sequelize_1.Model {
    static associate(models) {
        Time.belongsToMany(models.Campeonato, { through: 'posicao', foreignKey: 'time_id' });
        Time.hasMany(models.PosicaoTime, { foreignKey: 'time_id' });
    }
}
exports.Time = Time;
function initTimeModel() {
    return __awaiter(this, void 0, void 0, function* () {
        Time.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            nome_time: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'time',
            sequelize: database_1.sequelize
        });
        yield Time.sync().then(() => {
            console.log('tabela time criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initTimeModel = initTimeModel;
exports.default = Time;
