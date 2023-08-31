import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


export class Rodadas extends Model {
    declare id: number;
    declare id_campeonato_fk: string;
    declare numero_rodada: number;

}

export async function initRodadasModel(force: boolean) {
    Rodadas.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        id_campeonato_fk: {
          type: DataTypes.STRING,
          allowNull: false
        },
        numero_rodada: {
          type: DataTypes.BIGINT,
          allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'rodadas',
        sequelize: sequelize
    })

    await Rodadas.sync({force: force}).then(() => {
      console.log('tabela Rodadas criada')
  }).catch((error) => {
      console.error(error)
  })
}

export default Rodadas;