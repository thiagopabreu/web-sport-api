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
        id_rodada_fk: {
          type: DataTypes.BIGINT,
          allowNull: false
        },
        data: {
          type: DataTypes.STRING,
          allowNull: false
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false
        },
        local: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mandante: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placar_mandante: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        visitante: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placar_visitante: {
            type: DataTypes.BIGINT,
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'jogos',
        sequelize: sequelize
    })

    await Jogo.sync({force: force}).then(() => {
      console.log('tabela Jogos criada')
  }).catch((error) => {
      console.error(error)
  })
}

export default Jogo;