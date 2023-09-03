import { Router } from "express";
import { RelationPhotoController } from "../Controller/relationPhotoController";



const router = Router()

const relationPhotoController = new RelationPhotoController()
router.get('/getRelation/:idNews', relationPhotoController.getRelationPhotoById)
router.get('/getRelations', relationPhotoController.getAllRelations)

router.post('/registerRelation', relationPhotoController.registerRelation)

router.put('/updateRelation/:idNews', relationPhotoController.updateRelation)

router.delete('/deleteRelation/:id', relationPhotoController.deleteRelation)

export const relationRouter = router;