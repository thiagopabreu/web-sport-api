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
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/news', newsRoute_1.newsRouter);
app.get('/', (req, res) => {
    res.send("Oláa Mundo!");
});
exports.server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Servidor rodando na portaa ${port}`);
    yield (0, database_1.connectToDatabase)();
    yield (0, newsModel_1.initNoticiaModel)();
    yield (0, categoryModel_1.initCategoriaModel)();
    yield (0, championshipModel_1.initCampeonatoModel)();
    yield (0, teamModel_1.initTimeModel)();
    yield (0, teamPositionModel_1.initPosicaoTimeModel)();
    yield (0, eventModel_1.initEventoModel)();
}));
