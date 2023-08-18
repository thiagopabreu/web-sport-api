import { Router } from "express";
import { NewsController } from "../Controller/newsController";


let router = Router()

const newsController = new NewsController();

router.get('/getNews', newsController.getNews)
router.post('/registerNews', newsController.registerNews)

export const newsRouter = router;