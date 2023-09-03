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
exports.EventoRelacionamentoPhotoController = void 0;
const eventRelationPhoto_1 = require("../database/models/eventRelationPhoto");
class EventoRelacionamentoPhotoController {
    getEventoRelacionamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idEvent = request.params.idEvent;
            console.log(request.params);
            try {
                const relationPhoto = yield eventRelationPhoto_1.EventoRelacionamentoPhoto.findByPk(idEvent);
                response.status(200).json({ relationPhoto });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    getAllRelations(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const relations = yield eventRelationPhoto_1.EventoRelacionamentoPhoto.findAll();
                response.status(200).json({ relations: relations });
            }
            catch (error) {
                console.error(error);
                response.status(404).json({ error: error });
            }
        });
    }
    registerRelation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_event_fk = request.body.id_event_fk;
            const id_foto_fk = request.body.id_foto_fk;
            let relation;
            try {
                const relactionPhoto = yield eventRelationPhoto_1.EventoRelacionamentoPhoto.create({ id_event_fk, id_foto_fk });
                relactionPhoto.save();
                response.status(200).json({ relactionPhoto });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateRelation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_event_fk = request.body.id_event_fk;
            const id_foto_fk = request.body.id_foto_fk;
            try {
                const relation = yield eventRelationPhoto_1.EventoRelacionamentoPhoto.update({ id_foto_fk: id_foto_fk }, { where: { id_event_fk: id_event_fk } });
                response.status(200).json({ relation: relation });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteRelation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idEvent } = request.params;
            console.log(idEvent);
            try {
                const relationDeleted = yield eventRelationPhoto_1.EventoRelacionamentoPhoto.destroy({ where: { id_event_fk: idEvent } });
                response.status(200).json({ relationDeleted: relationDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.EventoRelacionamentoPhotoController = EventoRelacionamentoPhotoController;
