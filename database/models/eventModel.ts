import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import Categoria from "./categoryModel";

export class Evento extends Model {
    declare id: string;
    declare nome_evento: string;
    declare descricao: string;
    declare data_evento: Date;
    
    static associate(models: any) {
        Evento.belongsTo(models.Categoria, { foreignKey: 'categoria_id' });
    }
}

export async function initEventoModel() {
    Evento.init({
            id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nome_evento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_evento: {
      type: DataTypes.DATE,
      allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'evento',
    sequelize: sequelize
}
    )

    await Evento.sync().then(() => {
      console.log('tabela evento criada')
  }).catch((error) => {
      console.error(error)
  })
}