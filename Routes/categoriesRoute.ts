import { Router } from "express";
import { CategoryController } from "../Controller/categoryController";


let router = Router();

const categoryController = new CategoryController()

router.get('/getCategories', categoryController.getAllCategorys)
router.get('/getACategory/:id', categoryController.getCategoryById)

router.post('/registerCategory', categoryController.registerCategory)

router.put('/updateCategory/:id', categoryController.updateCategory)

router.delete('/deleteCategory/:id', categoryController.deleteCategory)

export const categoriesRouter = router;