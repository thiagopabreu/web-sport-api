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
exports.initEventoModel = exports.EventoFoto = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class EventoFoto extends sequelize_1.Model {
}
exports.EventoFoto = EventoFoto;
function initEventoModel() {
    return __awaiter(this, void 0, void 0, function* () {
        EventoFoto.init({
            id_event_fk: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            id_photo_fk: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'evento_foto',
            sequelize: database_1.sequelize
        });
        yield EventoFoto.sync().then(() => {
            console.log('tabela evento_foto criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initEventoModel = initEventoModel;
