import { Request, Response } from "express";
import Time from "../database/models/teamModel";
import PosicaoTime from "../database/models/teamPositionModel";


export class TeamPositionController {
    
    async getAllTeamPositions(request: Request, response: Response) {
        try {
            const teamsPositions = await PosicaoTime.findAll()

            response.status(200).json({teams: teamsPositions})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getTeamPositionById(request: Request, response: Response) {
        const teamId = request.params.id;

        try {
            const teamPosition = await PosicaoTime.findByPk(teamId);

            response.status(200).json({teamPosition})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }


    async registerTeamPosition(request: Request, response: Response) {
        
        const { nome_time, campeonato_id_fk } = request.body;

        try {
            const newTeam = await PosicaoTime.create({ nome_time, campeonato_id_fk })
            newTeam.save();

            response.status(200).json({newTeam})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateTeamPosition(request: Request, response: Response) {
        const id = request.params.id
        const { nome_time, campeonato_id_fk } = request.body;
        try {
            const teamPositionUpdated = await PosicaoTime.update({nome_time, campeonato_id_fk}, {where:{ id: id}})

            response.status(200).json({teamUpdated: teamPositionUpdated})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteTeamPosition(request: Request, response: Response) {
        const {id} = request.params

        try {
            const teamPositionDeleted = await PosicaoTime.destroy({where: { id: id}})

            response.status(200).json({teamPositionDeleted: teamPositionDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}