import express, {Request, Response} from 'express'
import { connectToDatabase } from './database/database';
import { initNoticiaModel } from './database/models/newsModel';
import { initCategoriaModel } from './database/models/categoryModel';
import { initCampeonatoModel } from './database/models/championshipModel';
import { initTimeModel } from './database/models/teamModel';
import PosicaoTime, { initPosicaoTimeModel } from './database/models/teamPositionModel';
import { initEventoModel } from './database/models/eventModel';
import { newsRouter } from './Routes/newsRoute';
import { initFotoModel } from './database/models/photosModel';
import { initRelacionamentoFotoModel } from './database/models/photoRelationModel';
import cors from 'cors'
import { photoRouter } from './Routes/photoRoute';
import { relationRouter } from './Routes/relationPhotoRoute';
import path from 'path';
import { categoriesRouter } from './Routes/categoriesRoute';
import { initAdminModel } from './database/models/userAdminModel';
import { userAdminRouter } from './Routes/userAdminRouter';
const app = express();

const port = 8000;

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/news', newsRouter)
app.use('/photo', photoRouter)
app.use('/relation', relationRouter)
app.use('/categories', categoriesRouter)
app.use('/admin', userAdminRouter)

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
    await initFotoModel()
    await initRelacionamentoFotoModel();
    await initAdminModel();
})