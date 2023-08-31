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
import { initEventoRelacionamentoPhotoModel } from './database/models/eventRelationPhoto';
import { eventRelationPhotoRouter } from './Routes/eventRelationPhotoRoute';
import { eventRouter } from './Routes/eventRoute';
import { teamsRouter } from './Routes/teamRoute';
import { teamPositionsRouter } from './Routes/teamPositionRoute';
import { championshipRouter } from './Routes/championshipRoute';
import { roundsRouter } from './Routes/roundsRoute';
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
app.use('/event', eventRouter)
app.use('/eventRelation', eventRelationPhotoRouter)
app.use('/team', teamsRouter)
app.use('/teamPosition', teamPositionsRouter)
app.use('/championship', championshipRouter)
app.use('/rounds', roundsRouter)

app.get('/', (req: Request, res: Response) => {
    res.send("Oláa Mundo!")
})

export const server = app.listen(port, async () => {
    console.log(`Servidor rodando na portaa ${port}`)
    const force = false
    await connectToDatabase();
    await initNoticiaModel(force);
    await initCategoriaModel(force);
    await initCampeonatoModel(force);
    await initTimeModel(force);
    await initPosicaoTimeModel(force);
    await initEventoModel(force);
    await initFotoModel(force)
    await initRelacionamentoFotoModel(force);
    await initAdminModel(force);
    await initEventoRelacionamentoPhotoModel(force);
})
