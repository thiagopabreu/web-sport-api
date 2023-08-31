import { Router } from "express";
import { NewsController } from "../Controller/newsController";


let router = Router()

const newsController = new NewsController();

router.get('/getNews', newsController.getNews)
router.get('/getANews/:id', newsController.getANews)

router.post('/registerNews', newsController.registerNews)

router.put('/updateNews/:id', newsController.updateNews)

router.delete('/deleteNews/:id', newsController.deleteNews)

export const newsRouter = router;