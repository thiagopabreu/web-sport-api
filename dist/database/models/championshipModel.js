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
exports.initCampeonatoModel = exports.Campeonato = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Campeonato extends sequelize_1.Model {
    static associate(models) {
        Campeonato.belongsToMany(models.Time, { through: 'posicao', foreignKey: 'campeonato_id' });
        Campeonato.hasMany(models.PosicaoTime, { foreignKey: 'campeonato_id' });
    }
}
exports.Campeonato = Campeonato;
function initCampeonatoModel(force) {
    return __awaiter(this, void 0, void 0, function* () {
        Campeonato.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            nome_campeonato: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            ano_campeonato: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'campeonato',
            sequelize: database_1.sequelize
        });
        yield Campeonato.sync({ force: force }).then(() => {
            console.log('tabela capeonato criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initCampeonatoModel = initCampeonatoModel;
exports.default = Campeonato;
