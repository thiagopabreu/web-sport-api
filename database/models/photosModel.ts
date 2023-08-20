import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


export class Foto extends Model {
    declare id: number;
    declare caminho: string
}

export async function initFotoModel() {
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
        }
    }, 
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'foto',
        sequelize: sequelize
    })

    await Foto.sync({force: false}).then(() => {
        console.log('tabela foto criada')
    }).catch((error) => {
        console.error(error)
    })
}

