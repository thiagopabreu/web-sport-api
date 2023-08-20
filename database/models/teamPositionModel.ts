import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import Time from "./teamModel";
import Campeonato from "./championshipModel";

export class PosicaoTime extends Model {
    declare id: number;
    declare posico: number;
    
    static associate(models: any) {
        PosicaoTime.belongsTo(models.Time, { foreignKey: 'time_id' });
        PosicaoTime.belongsTo(models.Campeonato, { foreignKey: 'campeonato_id' });
    }
}

export async function initPosicaoTimeModel() {
    PosicaoTime.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        campeonato_id_fk: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        posicao: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'posicao_time',
        sequelize: sequelize
    })

    await PosicaoTime.sync({force: false}).then(() => {
        console.log('tabela posicao_time criada')
    }).catch((error) => {
        console.error(error)
    })
}



export default PosicaoTime;