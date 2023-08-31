import { Router } from "express";
import { EventoRelacionamentoPhotoController } from "../Controller/eventRelationPhoto";



const router = Router()

const relationPhotoController = new EventoRelacionamentoPhotoController()
router.get('/getRelation/:idEvent', relationPhotoController.getEventoRelacionamento)
router.get('/getRelations', relationPhotoController.getAllRelations)

router.post('/registerRelation', relationPhotoController.registerRelation)

router.put('/updateRelation', relationPhotoController.updateRelation)

router.delete('/deleteRelation/:idEvent', relationPhotoController.deleteRelation)

export const eventRelationPhotoRouter = router;