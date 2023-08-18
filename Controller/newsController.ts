import { Request, Response } from "express";
import { Noticia } from "../database/models/newsModel";


export class NewsController {

    async getNews(request: Request, response:Response) {
        let news
        try {
            news = await Noticia.findAll();
            response.status(200).send({news})
        } catch (error) {
            console.error(error)
        }
    }

    async registerNews(request: Request, response: Response) {
        const {titulo, conteudo, data_pulicacao} = request.body
        let news
        try {
            news = await Noticia.create({titulo, conteudo, data_pulicacao}) 
            news.save();
            response.status(201).json(news)
        } catch(error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    } 
}