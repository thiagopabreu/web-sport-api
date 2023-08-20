import { Router } from "express";
import { RelationPhotoController } from "../Controller/relationPhotoController";



const router = Router()

const relationPhotoController = new RelationPhotoController()
router.get('/getRelation/:idNews', relationPhotoController.getRelationPhotoById)
router.post('/registerRelation', relationPhotoController.registerRelation)

export const relationRouter = router;