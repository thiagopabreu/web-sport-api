import { Router } from "express";
import { GameController } from "../Controller/gamesController";


let router = Router();

const gameController = new GameController()

router.get('/getGames', gameController.getAllGames)
router.get('/getAGame/:id', gameController.getGameById)
router.get('/getGameByRoundId/:id', gameController.getGameByRound)

router.post('/registerGame', gameController.registerGame)

router.put('/updateGame/:id', gameController.updateGame)

router.delete('/deleteGame/:id', gameController.deleteGame)

export const gameRouter = router;