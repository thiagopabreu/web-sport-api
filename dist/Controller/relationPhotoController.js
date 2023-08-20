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
exports.RelationPhotoController = void 0;
const photoRelationModel_1 = require("../database/models/photoRelationModel");
class RelationPhotoController {
    getRelationPhotoById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const idNews = request.params.idNews;
            try {
                const relationPhoto = yield photoRelationModel_1.RelacionamentoFoto.findByPk(idNews);
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
                const relations = yield photoRelationModel_1.RelacionamentoFoto.findAll();
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
            const id_news_fk = request.body.id_news_fk;
            const id_foto_fk = request.body.id_foto_fk;
            let relation;
            try {
                const relactionPhoto = yield photoRelationModel_1.RelacionamentoFoto.create({ id_news_fk, id_foto_fk });
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
            const id_news_fk = request.body.id_news_fk;
            const id_foto_fk = request.body.id_foto_fk;
            try {
                const relation = yield photoRelationModel_1.RelacionamentoFoto.update({ id_foto_fk: id_foto_fk }, { where: { id_news_fk: id_news_fk } });
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
            const { id_news_fk } = request.params;
            try {
                const relationDeleted = yield photoRelationModel_1.RelacionamentoFoto.destroy({ where: { id_news_fk: id_news_fk } });
                response.status(200).json({ relationDeleted: relationDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.RelationPhotoController = RelationPhotoController;
