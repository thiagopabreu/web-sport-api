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
exports.initPosicaoTimeModel = exports.PosicaoTime = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class PosicaoTime extends sequelize_1.Model {
    static associate(models) {
        PosicaoTime.belongsTo(models.Time, { foreignKey: 'time_id' });
        PosicaoTime.belongsTo(models.Campeonato, { foreignKey: 'campeonato_id' });
    }
}
exports.PosicaoTime = PosicaoTime;
function initPosicaoTimeModel() {
    return __awaiter(this, void 0, void 0, function* () {
        PosicaoTime.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            campeonato_id_fk: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            posicao: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'posicao_time',
            sequelize: database_1.sequelize
        });
        yield PosicaoTime.sync({ force: false }).then(() => {
            console.log('tabela posicao_time criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initPosicaoTimeModel = initPosicaoTimeModel;
exports.default = PosicaoTime;
