import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import bcrypt from 'bcrypt';

export class Admin extends Model {
    declare id: number;
    declare user: string;
    declare senha: string;

    public async comparePassword(password: string, passwordBD: string): Promise<boolean> {
        const result = await bcrypt.compare(password, passwordBD)
        console.log(result)
        return result;
    }
}

export async function initAdminModel() {
    Admin.init({
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        tableName: 'admin-senha',
        sequelize: sequelize
    })

    Admin.beforeCreate(async (user) => {
        const hashedPassword = await bcrypt.hash(user.senha, 10);
        user.senha = hashedPassword
    })

    await Admin.sync().then(() => {
        console.log('tabela admin-senha criada')
    }).catch((error) => {
        console.error(error)
    })
}