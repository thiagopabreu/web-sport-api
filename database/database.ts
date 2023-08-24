import {Sequelize, DataTypes, Model} from 'sequelize';
import { Noticia } from './models/newsModel';
import Categoria from './models/categoryModel';
import Time from './models/teamModel';
import Campeonato from './models/championshipModel';
import PosicaoTime from './models/teamPositionModel';
import dotenv from 'dotenv'
dotenv.config()



export const sequelize = new Sequelize(String(process.env.DATABASE), String(process.env.USER_DATABASE), String(process.env.USER_PASSWORD), {
    host: process.env.HOST_DATABASE,
    port: Number(process.env.PORT_DATABASE),
    dialect: 'mysql',
    dialectModule: require('mysql2')
})

export async function connectToDatabase() {
    sequelize.authenticate().then( () => {
        console.log('Connection has been estaablishe successfully!')
    }).catch( (error) => {
        console.error(error)
    })
}


sequelize.sync()
    .then(() => {
        console.log('Tabelas Sincronizadas com sucesso!')
    })
    .catch((error: Error) => {
        console.error('Erro ao sincronizar tabelas: ', error)
    })