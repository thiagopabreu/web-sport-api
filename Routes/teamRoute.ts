import { Router } from "express";
import { TeamController } from "../Controller/teamController";


let router = Router()

const teamController = new TeamController();

router.get('/getTeams', teamController.getAllTeams)
router.get('/getTeam/:id', teamController.getTeamById)

router.post('/registerTeams', teamController.registerTeam)

router.put('/updateTeams/:id', teamController.updateTeam)
router.delete('/deleteTeams/:id', teamController.deleteTeam)

export const teamsRouter = router;