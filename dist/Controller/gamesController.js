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
exports.GameController = void 0;
const gamesModel_1 = __importDefault(require("../database/models/gamesModel"));
class GameController {
    getAllGames(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield gamesModel_1.default.findAll();
                response.status(200).json({ games: games });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: { error } });
            }
        });
    }
    getGameById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const gameId = request.params.id;
            try {
                const game = yield gamesModel_1.default.findByPk(gameId);
                response.status(200).json({ game });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    getGameByRound(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const roundId = request.params.id;
            try {
                const game = yield gamesModel_1.default.findAll({ where: {
                        id_rodada_fk: roundId
                    } });
                response.status(200).json(game);
            }
            catch (error) {
                console.error(error);
                response.status(500);
            }
        });
    }
    registerGame(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante } = request.body;
            try {
                const newGame = yield gamesModel_1.default.create({ id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante });
                newGame.save();
                response.status(200).json({ newGame });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateGame(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const { id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante } = request.body;
            try {
                const gameUpdate = yield gamesModel_1.default.update({ id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante }, { where: { id: id } });
                response.status(200).json({ gameUpdate: gameUpdate });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteGame(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const gameDeleted = yield gamesModel_1.default.destroy({ where: { id: id } });
                response.status(200).json({ gameDeleted: gameDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.GameController = GameController;
