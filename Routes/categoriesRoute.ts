import { Router } from "express";
import { CategoryController } from "../Controller/categoryController";


let router = Router();

const categoryController = new CategoryController()

router.get('/getCategories', categoryController.getAllCategorys)

export const categoriesRouter = router;