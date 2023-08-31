

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


export class EventoRelacionamentoPhoto extends Model {
    declare id_event_fk: number;
    declare id_foto_fk: number;
}

export async function initEventoRelacionamentoPhotoModel(force: boolean) {
    EventoRelacionamentoPhoto.init({
        id_event_fk: {
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
        tableName: 'relacionamento_evento_foto',
        sequelize: sequelize
    })

    await EventoRelacionamentoPhoto.sync({force: force}).then(() => {
        console.log('tabela relacionamento_evento_foto criada')
    }).catch((error) => {
        console.error(error)
    })
}

