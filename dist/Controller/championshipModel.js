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
exports.ChampionshipController = void 0;
const championshipModel_1 = __importDefault(require("../database/models/championshipModel"));
class ChampionshipController {
    getAllChampionship(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const championships = yield championshipModel_1.default.findAll();
                response.status(200).json({ championships: championships });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: { error } });
            }
        });
    }
    getChampionshipyById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const championshipId = request.params.id;
            try {
                const championship = yield championshipModel_1.default.findByPk(championshipId);
                response.status(200).json({ championship });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    registerCampeonato(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_campeonato, data_inicio, data_fim } = request.body;
            try {
                const newChampionship = yield championshipModel_1.default.create({ nome_campeonato, data_inicio, data_fim });
                newChampionship.save();
                response.status(200).json({ newChampionship });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateChampionship(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const { nome_campeonato, data_inicio, data_fim } = request.body;
            try {
                const championshipUpdate = yield championshipModel_1.default.update({ nome_campeonato, data_inicio, data_fim }, { where: { id: id } });
                response.status(200).json({ championshipUpdate: championshipUpdate });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteChampionship(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const championshipDeleted = yield championshipModel_1.default.destroy({ where: { id: id } });
                response.status(200).json({ championshipDeleted: championshipDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.ChampionshipController = ChampionshipController;
