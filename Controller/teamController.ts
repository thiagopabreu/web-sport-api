import { Request, Response } from "express";
import Time from "../database/models/teamModel";


export class TeamController {
    
    async getAllTeams(request: Request, response: Response) {
        try {
            const teams = await Time.findAll()

            response.status(200).json({teams: teams})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getTeamById(request: Request, response: Response) {
        const teamId = request.params.id;

        try {
            const team = await Time.findByPk(teamId);

            response.status(200).json({team})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }


    async registerTeam(request: Request, response: Response) {
        
        const { nome_time } = request.body;

        try {
            const newTeam = await Time.create({ nome_time })
            newTeam.save();

            response.status(200).json({newTeam})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateTeam(request: Request, response: Response) {
        const id = request.params.id
        const { nome_time } = request.body;
        try {
            const teamUpdated = await Time.update({nome_time}, {where:{ id: id}})

            response.status(200).json({teamUpdated: teamUpdated})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteTeam(request: Request, response: Response) {
        const {id} = request.params

        try {
            const teamDeleted = await Time.destroy({where: { id: id}})

            response.status(200).json({teamDeleted: teamDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}