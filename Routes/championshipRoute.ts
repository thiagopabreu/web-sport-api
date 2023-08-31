import { Router } from "express";
import { ChampionshipController } from "../Controller/championshipModel";


let router = Router()

const championshipController = new ChampionshipController();

router.get('/getChampionships', championshipController.getAllChampionship)
router.get('/getChampionship/:id', championshipController.getChampionshipyById)

router.post('/registerChampionship', championshipController.registerCampeonato)

router.put('/updateChampionship/:id', championshipController.updateChampionship)

router.delete('/deleteNews/:id', championshipController.deleteChampionship)

export const championshipRouter = router;