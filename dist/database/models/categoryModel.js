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
exports.initCategoriaModel = exports.Categoria = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Categoria extends sequelize_1.Model {
    static associate(models) {
        Categoria.hasMany(models.Noticia, { foreignKey: 'categoria_id' });
        Categoria.hasMany(models.Evento, { foreignKey: 'categoria_id' });
    }
}
exports.Categoria = Categoria;
function initCategoriaModel() {
    return __awaiter(this, void 0, void 0, function* () {
        Categoria.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            nome: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'categoria',
            sequelize: database_1.sequelize
        });
        //Categoria.associate({ Noticia, Evento })
        yield Categoria.sync().then(() => {
            console.log('tabela categoria criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initCategoriaModel = initCategoriaModel;
exports.default = Categoria;
