import express, {Request, Response} from 'express'
import { connectToDatabase } from './database/database';
import { initNoticiaModel } from './database/models/newsModel';
import { initCategoriaModel } from './database/models/categoryModel';
import { initCampeonatoModel } from './database/models/championshipModel';
import { initTimeModel } from './database/models/teamModel';
import PosicaoTime, { initPosicaoTimeModel } from './database/models/teamPositionModel';
import { initEventoModel } from './database/models/eventModel';
import { newsRouter } from './Routes/newsRoute';
import cors from 'cors'
const app = express();

const port = 8000;

app.use(cors())
app.use(express.json())


app.use('/news', newsRouter)




app.get('/', (req: Request, res: Response) => {
    res.send("Oláa Mundo!")
})

export const server = app.listen(port, async () => {
    console.log(`Servidor rodando na portaa ${port}`)
    await connectToDatabase();
    await initNoticiaModel();
    await initCategoriaModel();
    await initCampeonatoModel();
    await initTimeModel();
    await initPosicaoTimeModel();
    await initEventoModel();
})