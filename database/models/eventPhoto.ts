import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import Categoria from "./categoryModel";

export class EventoFoto extends Model {
    declare id_event_fk: number;
    declare id_photo_fk: number;

}

export async function initEventoModel() {
    EventoFoto.init({
    id_event_fk: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
    },
    id_photo_fk: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'evento_foto',
    sequelize: sequelize
}
    )

    await EventoFoto.sync().then(() => {
      console.log('tabela evento_foto criada')
  }).catch((error) => {
      console.error(error)
  })
}