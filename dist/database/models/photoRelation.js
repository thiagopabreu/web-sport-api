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
exports.initRelacionamentoFotoModel = exports.RelacionamentoFoto = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class RelacionamentoFoto extends sequelize_1.Model {
}
exports.RelacionamentoFoto = RelacionamentoFoto;
function initRelacionamentoFotoModel() {
    return __awaiter(this, void 0, void 0, function* () {
        RelacionamentoFoto.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            caminho: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            id_item_fk: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            id_foto_fk: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'relacionamento_foto',
            sequelize: database_1.sequelize
        });
        yield RelacionamentoFoto.sync().then(() => {
            console.log('tabela relacionamento_foto criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initRelacionamentoFotoModel = initRelacionamentoFotoModel;
