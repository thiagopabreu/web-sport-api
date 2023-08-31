import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import {Time} from './teamModel'
import PosicaoTime from "./teamPositionModel";

export class Campeonato extends Model {
    declare id: number;
    declare nome_campeonato: string;
    declare ano_campeonato: string;

    static associate(models: any) {
        Campeonato.belongsToMany(models.Time,  { through: 'posicao', foreignKey: 'campeonato_id' });
        Campeonato.hasMany(models.PosicaoTime, { foreignKey: 'campeonato_id' });
    }
}

export async function initCampeonatoModel(force: boolean) {
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
        ano_campeonato: {
          type: DataTypes.STRING,
          allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'campeonato',
        sequelize: sequelize
    })

    await Campeonato.sync({force: force}).then(() => {
      console.log('tabela capeonato criada')
  }).catch((error) => {
      console.error(error)
  })
}

export default Campeonato;