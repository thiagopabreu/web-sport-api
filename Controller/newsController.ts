import { Request, Response } from "express";
import { Noticia } from "../database/models/newsModel";


export class NewsController {

    async getNews(request: Request, response:Response) {
        
        try {
            let news = await Noticia.findAll();
            response.status(200).json({news})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async getANews(request: Request, response:Response) {

        let newsId = request.params.id;
    
        try {
            let news = await Noticia.findByPk(newsId);
            response.status(200).json({news})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async registerNews(request: Request, response: Response) {
        const {titulo, sub_conteudo, conteudo, id_categoria_fk} = request.body
        console.log(id_categoria_fk)
        const data_publicacao = Date.now()
        let news
        try {
            news = await Noticia.create({titulo, sub_conteudo ,conteudo, data_publicacao, id_categoria_fk}) 
            news.save();
            response.status(201).json(news)
        } catch(error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    } 

    async updateNews(request: Request, response: Response) {
        const newsId = request.params.id;
        const {titulo, conteudo} = request.body
        try {
            let newsUpdated = Noticia.update({titulo: titulo, conteudo: conteudo}, {where: {id: newsId}})
            response.status(200).json({newsUpdated})
            
        } catch (error) {
            console.log(error)
            response.status(500).json({error})
        }
    }

    async deleteNews(request: Request, response: Response) {
        const newsId = request.params.id;
        const {titulo, conteudo} = request.body
        try {
            let newsDeleted = Noticia.destroy({where: { id: newsId }})
            response.status(200).json({newsDeleted})
            
        } catch (error) {
            console.log(error)
            response.status(500).json({error})
        } 
    }
}