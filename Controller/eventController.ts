import { Request, Response } from "express";
import Campeonato from "../database/models/championshipModel";
import { Evento } from "../database/models/eventModel";


export class EventController {
    
    async getAllEvents(request: Request, response: Response) {
        try {
            const events = await Evento.findAll()

            response.status(200).json({events: events})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getEventById(request:Request, response:Response) {
        const eventId = request.params.id;

        try {
            const event = await Evento.findByPk(eventId);

            response.status(200).json({event})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }


    async registerEvent(request: Request, response: Response) {
        
        const { nome_evento, descricao, data_evento, id_categoria_fk, local, caminho_file } = request.body;

        try {
            const newEvent = await Evento.create({ nome_evento, descricao, data_evento, id_categoria_fk, local, caminho_file})
            newEvent.save();

            response.status(200).json({newEvent})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateEvent(request: Request, response: Response) {
        const id = request.params.id
        const { nome_evento, descricao, data_fim } = request.body;
        try {
            const eventUpdate = await Evento.update({nome_evento, descricao, data_fim}, {where:{ id: id}})

            response.status(200).json({eventUpdate: eventUpdate})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteChampionship(request: Request, response: Response) {
        const {id} = request.params

        try {
            const eventDeleted = await Evento.destroy({where: { id: id}})

            response.status(200).json({eventDeleted: eventDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}