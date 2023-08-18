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
exports.initEventoModel = exports.Evento = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Evento extends sequelize_1.Model {
    static associate(models) {
        Evento.belongsTo(models.Categoria, { foreignKey: 'categoria_id' });
    }
}
exports.Evento = Evento;
function initEventoModel() {
    return __awaiter(this, void 0, void 0, function* () {
        Evento.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            nome_evento: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            data_evento: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'evento',
            sequelize: database_1.sequelize
        });
        yield Evento.sync().then(() => {
            console.log('tabela evento criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initEventoModel = initEventoModel;
