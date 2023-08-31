import { Request, Response } from "express";
import { EventoRelacionamentoPhoto } from "../database/models/eventRelationPhoto";

export class EventoRelacionamentoPhotoController {
    
    async getEventoRelacionamento(request:Request, response:Response) {
        const idEvent = request.params.idEvent;
        console.log(request.params)
        try {
            const relationPhoto = await EventoRelacionamentoPhoto.findByPk(idEvent);

            response.status(200).json({relationPhoto})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async getAllRelations(request: Request, response: Response) {
        try {
            const relations = await EventoRelacionamentoPhoto.findAll();

            response.status(200).json({relations: relations})
        } catch (error) {
            console.error(error)
            response.status(404).json({error: error})
        }
    }


    async registerRelation(request: Request, response: Response) {
        const id_event_fk: number = request.body.id_event_fk;
        const id_foto_fk: number = request.body.id_foto_fk;

        let relation
        try {
            const relactionPhoto = await EventoRelacionamentoPhoto.create({id_event_fk, id_foto_fk})
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
            const relation = await EventoRelacionamentoPhoto.update({id_foto_fk: id_foto_fk}, {where:{ id_event_fk: id_event_fk}})

            response.status(200).json({relation: relation})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteRelation(request: Request, response: Response) {
        const {idNews} = request.params

        try {
            const relationDeleted = await EventoRelacionamentoPhoto.destroy({where: { id_event_fk: idNews}})

            response.status(200).json({relationDeleted: relationDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }
}