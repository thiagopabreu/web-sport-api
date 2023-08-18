import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import {Time} from './teamModel'
import PosicaoTime from "./teamPositionModel";

export class Campeonato extends Model {
    declare id: number;
    declare nome_campeonato: string;
    declare data_inicio: Date;
    declare data_fim: Date;

    static associate(models: any) {
        Campeonato.belongsToMany(models.Time,  { through: 'posicao', foreignKey: 'campeonato_id' });
        Campeonato.hasMany(models.PosicaoTime, { foreignKey: 'campeonato_id' });
    }
}

export async function initCampeonatoModel() {
    Campeonato.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome_campeonato: {
          type: DataTypes.STRING,
          allowNull: false
        },
        data_inicio: {
          type: DataTypes.DATE,
          allowNull: false
        },
        data_fim: {
          type: DataTypes.DATE,
          allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'campeonato',
        sequelize: sequelize
    })

    await Campeonato.sync().then(() => {
      console.log('tabela capeonato criada')
  }).catch((error) => {
      console.error(error)
  })
}

export default Campeonato;