import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import Campeonato from "./championshipModel";
import PosicaoTime from "./teamPositionModel";

export class Time extends Model {
    declare id: number;
    declare nome_time: string;

    static associate(models: any) {
        Time.belongsToMany(models.Campeonato, { through: 'posicao', foreignKey: 'time_id' });
        Time.hasMany(models.PosicaoTime, { foreignKey: 'time_id' });
    }
}

export async function initTimeModel() {
    Time.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nome_time: {
          type: DataTypes.STRING,
          allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'time',
        sequelize: sequelize
    })

    await Time.sync().then(() => {
        console.log('tabela time criada')
    }).catch((error) => {
        console.error(error)
    })
}


export default Time;