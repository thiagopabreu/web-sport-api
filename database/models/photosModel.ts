import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


export class Foto extends Model {
    declare id: number;
    declare caminho: string;
    declare imagem_data: string;
}

export async function initFotoModel(force: boolean) {
    Foto.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        caminho: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagem_data: {
            type: DataTypes.BLOB('long'),
            allowNull: false
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'foto',
        sequelize: sequelize
    })

    await Foto.sync({force: force}).then(() => {
        console.log('tabela foto criada')
    }).catch((error) => {
        console.error(error)
    })
}

