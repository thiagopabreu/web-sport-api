import { Request, Response } from "express";
import Jogo from "../database/models/gamesModel";


export class GameController {
    
    async getAllGames(request: Request, response: Response) {
        try {
            const games = await Jogo.findAll()

            response.status(200).json({games: games})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getGameById(request:Request, response:Response) {
        const gameId = request.params.id;

        try {
            const game = await Jogo.findByPk(gameId);

            response.status(200).json({game})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async getGameByRound(request: Request, response: Response) {
        const roundId = request.params.id

        try {
            const game = await Jogo.findAll({where: {
                id_rodada_fk: roundId
            }})
            response.status(200).json(game)
        } catch (error) {
            console.error(error)
            response.status(500)
        }
    }
    async registerGame(request: Request, response: Response) {
        
        const { id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante } = request.body;

        try {
            const newGame = await Jogo.create({id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante})
            newGame.save();

            response.status(200).json({newGame})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateGame(request: Request, response: Response) {
        const id = request.params.id
        const { id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante } = request.body;
        try {
            const gameUpdate = await Jogo.update({id_rodada_fk, data, hora, local, mandante, placar_mandante, visitante, placar_visitante}, {where:{ id: id}})

            response.status(200).json({gameUpdate: gameUpdate})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteGame(request: Request, response: Response) {
        const {id} = request.params

        try {
            const gameDeleted = await Jogo.destroy({where: { id: id}})

            response.status(200).json({gameDeleted: gameDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}