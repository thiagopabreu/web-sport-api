"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const newsModel_1 = require("./database/models/newsModel");
const categoryModel_1 = require("./database/models/categoryModel");
const championshipModel_1 = require("./database/models/championshipModel");
const teamModel_1 = require("./database/models/teamModel");
const teamPositionModel_1 = require("./database/models/teamPositionModel");
const eventModel_1 = require("./database/models/eventModel");
const newsRoute_1 = require("./Routes/newsRoute");
const photosModel_1 = require("./database/models/photosModel");
const photoRelationModel_1 = require("./database/models/photoRelationModel");
const cors_1 = __importDefault(require("cors"));
const photoRoute_1 = require("./Routes/photoRoute");
const relationPhotoRoute_1 = require("./Routes/relationPhotoRoute");
const path_1 = __importDefault(require("path"));
const categoriesRoute_1 = require("./Routes/categoriesRoute");
const userAdminModel_1 = require("./database/models/userAdminModel");
const userAdminRouter_1 = require("./Routes/userAdminRouter");
const eventRelationPhoto_1 = require("./database/models/eventRelationPhoto");
const eventRelationPhotoRoute_1 = require("./Routes/eventRelationPhotoRoute");
const eventRoute_1 = require("./Routes/eventRoute");
const teamRoute_1 = require("./Routes/teamRoute");
const teamPositionRoute_1 = require("./Routes/teamPositionRoute");
const championshipRoute_1 = require("./Routes/championshipRoute");
const roundsRoute_1 = require("./Routes/roundsRoute");
const roundsModel_1 = require("./database/models/roundsModel");
const gamesModel_1 = require("./database/models/gamesModel");
const gamesRoute_1 = require("./Routes/gamesRoute");
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.use('/news', newsRoute_1.newsRouter);
app.use('/photo', photoRoute_1.photoRouter);
app.use('/relation', relationPhotoRoute_1.relationRouter);
app.use('/categories', categoriesRoute_1.categoriesRouter);
app.use('/admin', userAdminRouter_1.userAdminRouter);
app.use('/event', eventRoute_1.eventRouter);
app.use('/eventRelation', eventRelationPhotoRoute_1.eventRelationPhotoRouter);
app.use('/team', teamRoute_1.teamsRouter);
app.use('/teamPosition', teamPositionRoute_1.teamPositionsRouter);
app.use('/championship', championshipRoute_1.championshipRouter);
app.use('/rounds', roundsRoute_1.roundsRouter);
app.use('/games', gamesRoute_1.gameRouter);
app.get('/', (req, res) => {
    res.send("Oláa Mundo!");
});
exports.server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Servidor rodando na portaa ${port}`);
    const force = false;
    yield (0, database_1.connectToDatabase)();
    yield (0, newsModel_1.initNoticiaModel)(force);
    yield (0, categoryModel_1.initCategoriaModel)(force);
    yield (0, championshipModel_1.initCampeonatoModel)(force);
    yield (0, teamModel_1.initTimeModel)(force);
    yield (0, teamPositionModel_1.initPosicaoTimeModel)(force);
    yield (0, eventModel_1.initEventoModel)(force);
    yield (0, photosModel_1.initFotoModel)(force);
    yield (0, photoRelationModel_1.initRelacionamentoFotoModel)(force);
    yield (0, userAdminModel_1.initAdminModel)(force);
    yield (0, eventRelationPhoto_1.initEventoRelacionamentoPhotoModel)(force);
    yield (0, roundsModel_1.initRodadasModel)(force);
    yield (0, gamesModel_1.initJogoModel)(force);
}));
