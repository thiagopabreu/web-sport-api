import { DataTypes, DatabaseError, Model } from "sequelize";
import { sequelize } from "../database";
import { Noticia } from "./newsModel";
import { Evento } from "./eventModel";
export class Categoria extends Model {
    declare id: number;
    declare nome: string;

    static associate(models: any) {
        Categoria.hasMany(models.Noticia, { foreignKey: 'categoria_id' });
        Categoria.hasMany(models.Evento, { foreignKey: 'categoria_id' });
    }
}

export async function initCategoriaModel() {
    Categoria.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
    },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'categoria',
        sequelize: sequelize
    })

    //Categoria.associate({ Noticia, Evento })

    await Categoria.sync().then(() => {
        console.log('tabela categoria criada')
    }).catch((error) => {
        console.error(error)
    })
}

  
export default Categoria;