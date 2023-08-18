// id (PK) | titulo | conteudo | data_publicacao | categoria_id (FK)

import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize as Sequelize } from "../database";
import Categoria from "./categoryModel";

export class Noticia extends Model {
    declare id: number;
    declare titulo: string;
    declare conteudo: Text;
    declare data_publicacao: Date;

    static associate(models: any) {
        Noticia.belongsTo(models.Categoria, { foreignKey: 'categoria_id' });
    }
}

export async function initNoticiaModel() {
    Noticia.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conteudo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        data_publicacao: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'noticias',
        sequelize: Sequelize,
        name: {
            singular: 'noticia',
            plural: 'noticias'
        }
    }
    )

    //Noticia.associate({ Categoria })

    await Noticia.sync().then(() => {
        console.log('tabela noticia criada')
    }).catch((error) => {
        console.error(error)
    })
}



