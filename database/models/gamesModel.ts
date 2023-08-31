import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


export class Jogo extends Model {
    declare id: number;
    declare id_rodada_fk: number;
    declare data: string;
    declare hora: string;
    declare local: string;
    declare mandante: string;
    declare placar_mandante: number;
    declare visitante: string;
    declare placar_visitante: number;

}

export async function initJogoModel(force: boolean) {
    Jogo.init({
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

    await Jogo.sync({force: force}).then(() => {
      console.log('tabela Jogos criada')
  }).catch((error) => {
      console.error(error)
  })
}

export default Jogo;