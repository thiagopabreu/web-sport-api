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
exports.NewsController = void 0;
const newsModel_1 = require("../database/models/newsModel");
class NewsController {
    getNews(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let news = yield newsModel_1.Noticia.findAll();
                response.status(200).json({ news });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    getANews(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let newsId = request.params.id;
            try {
                let news = yield newsModel_1.Noticia.findByPk(newsId);
                response.status(200).json({ news });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    registerNews(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, sub_conteudo, conteudo, id_categoria_fk } = request.body;
            console.log(id_categoria_fk);
            const data_publicacao = Date.now();
            let news;
            try {
                news = yield newsModel_1.Noticia.create({ titulo, sub_conteudo, conteudo, data_publicacao, id_categoria_fk });
                news.save();
                response.status(201).json(news);
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    updateNews(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const newsId = request.params.id;
            const { titulo, conteudo } = request.body;
            try {
                let newsUpdated = newsModel_1.Noticia.update({ titulo: titulo, conteudo: conteudo }, { where: { id: newsId } });
                response.status(200).json({ newsUpdated });
            }
            catch (error) {
                console.log(error);
                response.status(500).json({ error });
            }
        });
    }
    deleteNews(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const newsId = request.params.id;
            const { titulo, conteudo } = request.body;
            try {
                let newsDeleted = newsModel_1.Noticia.destroy({ where: { id: newsId } });
                response.status(200).json({ newsDeleted });
            }
            catch (error) {
                console.log(error);
                response.status(500).json({ error });
            }
        });
    }
}
exports.NewsController = NewsController;
