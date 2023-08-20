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
exports.TeamPositionController = void 0;
const teamPositionModel_1 = __importDefault(require("../database/models/teamPositionModel"));
class TeamPositionController {
    getAllTeamPositions(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const teamsPositions = yield teamPositionModel_1.default.findAll();
                response.status(200).json({ teams: teamsPositions });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: { error } });
            }
        });
    }
    getTeamPositionById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const teamId = request.params.id;
            try {
                const teamPosition = yield teamPositionModel_1.default.findByPk(teamId);
                response.status(200).json({ teamPosition });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    registerTeam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_time } = request.body;
            try {
                const newTeam = yield teamPositionModel_1.default.create({ nome_time });
                newTeam.save();
                response.status(200).json({ newTeam });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateTeam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const { nome_time } = request.body;
            try {
                const teamUpdated = yield teamPositionModel_1.default.update({ nome_time }, { where: { id: id } });
                response.status(200).json({ teamUpdated: teamUpdated });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteTeam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const teamDeleted = yield teamPositionModel_1.default.destroy({ where: { id: id } });
                response.status(200).json({ teamDeleted: teamDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.TeamPositionController = TeamPositionController;
