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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const eventModel_1 = require("../database/models/eventModel");
class EventController {
    getAllEvents(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield eventModel_1.Evento.findAll();
                response.status(200).json({ events: events });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: { error } });
            }
        });
    }
    getEventById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = request.params.id;
            try {
                const event = yield eventModel_1.Evento.findByPk(eventId);
                response.status(200).json({ event });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    registerEvent(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome_evento, descricao, data_fim } = request.body;
            try {
                const newEvent = yield eventModel_1.Evento.create({ nome_evento, descricao, data_fim });
                newEvent.save();
                response.status(200).json({ newEvent });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateEvent(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const { nome_evento, descricao, data_fim } = request.body;
            try {
                const eventUpdate = yield eventModel_1.Evento.update({ nome_evento, descricao, data_fim }, { where: { id: id } });
                response.status(200).json({ eventUpdate: eventUpdate });
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
                const eventDeleted = yield eventModel_1.Evento.destroy({ where: { id: id } });
                response.status(200).json({ eventDeleted: eventDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.EventController = EventController;
