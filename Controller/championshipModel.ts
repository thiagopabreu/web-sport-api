import { Request, Response } from "express";
import Campeonato from "../database/models/championshipModel";


export class ChampionshipController {
    
    async getAllChampionship(request: Request, response: Response) {
        try {
            const championships = await Campeonato.findAll()

            response.status(200).json({championships: championships})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getChampionshipyById(request:Request, response:Response) {
        const championshipId = request.params.id;

        try {
            const championship = await Campeonato.findByPk(championshipId);

            response.status(200).json({championship})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }


    async registerCampeonato(request: Request, response: Response) {
        
        const { nome_campeonato, data_inicio, data_fim } = request.body;

        try {
            const newChampionship = await Campeonato.create({nome_campeonato, data_inicio, data_fim})
            newChampionship.save();

            response.status(200).json({newChampionship})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateChampionship(request: Request, response: Response) {
        const id = request.params.id
        const { nome_campeonato, data_inicio, data_fim } = request.body;
        try {
            const championshipUpdate = await Campeonato.update({nome_campeonato, data_inicio, data_fim}, {where:{ id: id}})

            response.status(200).json({championshipUpdate: championshipUpdate})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteChampionship(request: Request, response: Response) {
        const {id} = request.params

        try {
            const championshipDeleted = await Campeonato.destroy({where: { id: id}})

            response.status(200).json({championshipDeleted: championshipDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}