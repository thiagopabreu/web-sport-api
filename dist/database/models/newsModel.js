"use strict";
// id (PK) | titulo | conteudo | data_publicacao | categoria_id (FK)
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
exports.initNoticiaModel = exports.Noticia = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class Noticia extends sequelize_1.Model {
    static associate(models) {
        Noticia.belongsTo(models.Categoria, { foreignKey: 'categoria_id' });
    }
}
exports.Noticia = Noticia;
function initNoticiaModel(force) {
    return __awaiter(this, void 0, void 0, function* () {
        Noticia.init({
            id: {
                type: sequelize_1.DataTypes.BIGINT,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            titulo: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            sub_conteudo: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            conteudo: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            data_publicacao: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            id_categoria_fk: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            tableName: 'noticias',
            sequelize: database_1.sequelize,
            name: {
                singular: 'noticia',
                plural: 'noticias'
            }
        });
        //Noticia.associate({ Categoria })
        yield Noticia.sync({ force: force }).then(() => {
            console.log('tabela noticia criada');
        }).catch((error) => {
            console.error(error);
        });
    });
}
exports.initNoticiaModel = initNoticiaModel;
