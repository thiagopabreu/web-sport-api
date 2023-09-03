import { Request, Response } from "express";
import { RelacionamentoFoto } from "../database/models/photoRelationModel";

export class RelationPhotoController {
    
    async getRelationPhotoById(request:Request, response:Response) {
        const idNews = request.params.idNews;

        try {
            const relationPhoto = await RelacionamentoFoto.findByPk(idNews);

            response.status(200).json({relationPhoto})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async getAllRelations(request: Request, response: Response) {
        try {
            const relations = await RelacionamentoFoto.findAll();

            response.status(200).json({relations: relations})
        } catch (error) {
            console.error(error)
            response.status(404).json({error: error})
        }
    }


    async registerRelation(request: Request, response: Response) {
        const id_news_fk: number = request.body.id_news_fk;
        const id_foto_fk: number = request.body.id_foto_fk;

        let relation
        try {
            const relactionPhoto = await RelacionamentoFoto.create({id_news_fk, id_foto_fk})
            relactionPhoto.save();

            response.status(200).json({relactionPhoto})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateRelation(request: Request, response: Response) {
        const id_event_fk = request.body.id_event_fk;
        const id_foto_fk: number = request.body.id_foto_fk;
        try {
            const relation = await RelacionamentoFoto.update({id_foto_fk: id_foto_fk}, {where:{ id_event_fk: id_event_fk}})

            response.status(200).json({relation: relation})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteRelation(request: Request, response: Response) {
        const {id} = request.params

        try {
            const relationDeleted = await RelacionamentoFoto.destroy({where: { id_news_fk: id}})

            response.status(200).json({relationDeleted: relationDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }
}