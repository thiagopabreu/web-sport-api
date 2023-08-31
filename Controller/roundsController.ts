import { Request, Response } from "express";
import Rounds from '../database/models/roundsModel'


export class RoundsController {
    
    async getAllRounds(request: Request, response: Response) {
        try {
            const rounds = await Rounds.findAll()

            response.status(200).json({rounds: rounds})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getRoundsById(request:Request, response:Response) {
        const roundId = request.params.id;

        try {
            const rounds = await Rounds.findByPk(roundId);

            response.status(200).json({rounds})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }


    async registerRounds(request: Request, response: Response) {
        
        const { id_campeonato_fk, numero_rodada } = request.body;

        try {
            const newRounds = await Rounds.create({id_campeonato_fk, numero_rodada})
            newRounds.save();

            response.status(200).json({newRounds})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateRounds(request: Request, response: Response) {
        const id = request.params.id
        const { id_campeonato_fk, numero_rodada } = request.body;
        try {
            const roundsUpdate = await Rounds.update({id_campeonato_fk, numero_rodada}, {where:{ id: id}})

            response.status(200).json({roundsUpdate})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteRounds(request: Request, response: Response) {
        const {id} = request.params

        try {
            const roundsDeleted = await Rounds.destroy({where: { id: id}})

            response.status(200).json({roundsDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}