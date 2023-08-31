import { Router } from "express";
import { RoundsController } from "../Controller/roundsController";


let router = Router();

const roundsController = new RoundsController()

router.get('/getRounds', roundsController.getAllRounds)
router.get('/getARound/:id', roundsController.getRoundsById)

router.post('/registerRound', roundsController.registerRounds)

router.put('/updateRound/:id', roundsController.updateRounds)

router.delete('deleteRound/:id', roundsController.deleteRounds)

export const roundsRouter = router;