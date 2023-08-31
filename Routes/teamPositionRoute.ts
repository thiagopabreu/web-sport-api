import { Router } from "express";
import { TeamPositionController } from "../Controller/teamPositionController";


let router = Router()

const teamPositionController = new TeamPositionController();

router.get('/getTeamPositions', teamPositionController.getAllTeamPositions)
router.get('/getTeamPosition/:id', teamPositionController.getTeamPositionById)

router.post('/registerTeamPositions', teamPositionController.registerTeamPosition)

router.put('/updateTeamPositions/:id', teamPositionController.updateTeamPosition)
router.delete('/deleteTeamPositions/:id', teamPositionController.deleteTeamPosition)

export const teamPositionsRouter = router;