import {Sequelize, DataTypes, Model} from 'sequelize';
import { Noticia } from './models/newsModel';
import Categoria from './models/categoryModel';
import Time from './models/teamModel';
import Campeonato from './models/championshipModel';
import PosicaoTime from './models/teamPositionModel';

export const sequelize = new Sequelize('portal_regional_db', 'root', 'admin', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
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