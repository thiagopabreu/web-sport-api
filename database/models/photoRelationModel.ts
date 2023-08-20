import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


export class RelacionamentoFoto extends Model {
    declare id_news_fk: number;
    declare id_foto_fk: number;
}

export async function initRelacionamentoFotoModel() {
    RelacionamentoFoto.init({
        id_news_fk: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        id_foto_fk: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'relacionamento_foto',
        sequelize: sequelize
    })

    await RelacionamentoFoto.sync().then(() => {
        console.log('tabela relacionamento_foto criada')
    }).catch((error) => {
        console.error(error)
    })
}

