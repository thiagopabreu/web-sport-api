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
            let news;
            try {
                news = yield newsModel_1.Noticia.findAll();
                response.status(200).send({ news });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    registerNews(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { titulo, conteudo, data_pulicacao } = request.body;
            let news;
            try {
                news = yield newsModel_1.Noticia.create({ titulo, conteudo, data_pulicacao });
                news.save();
                response.status(201).json(news);
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.NewsController = NewsController;
