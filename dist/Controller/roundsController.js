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
exports.RoundsController = void 0;
const roundsModel_1 = __importDefault(require("../database/models/roundsModel"));
class RoundsController {
    getAllRounds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rounds = yield roundsModel_1.default.findAll();
                response.status(200).json({ rounds: rounds });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: { error } });
            }
        });
    }
    getRoundsById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const roundId = request.params.id;
            try {
                const rounds = yield roundsModel_1.default.findByPk(roundId);
                response.status(200).json({ rounds });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    registerRounds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_campeonato_fk, numero_rodada } = request.body;
            try {
                const newRounds = yield roundsModel_1.default.create({ id_campeonato_fk, numero_rodada });
                newRounds.save();
                response.status(200).json({ newRounds });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateRounds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const { id_campeonato_fk, numero_rodada } = request.body;
            try {
                const roundsUpdate = yield roundsModel_1.default.update({ id_campeonato_fk, numero_rodada }, { where: { id: id } });
                response.status(200).json({ roundsUpdate });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteRounds(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const roundsDeleted = yield roundsModel_1.default.destroy({ where: { id: id } });
                response.status(200).json({ roundsDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.RoundsController = RoundsController;
