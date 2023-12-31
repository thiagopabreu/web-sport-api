"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRouter = void 0;
const express_1 = require("express");
const categoryController_1 = require("../Controller/categoryController");
let router = (0, express_1.Router)();
const categoryController = new categoryController_1.CategoryController();
router.get('/getCategories', categoryController.getAllCategorys);
router.get('/getACategory/:id', categoryController.getCategoryById);
router.post('/registerCategory', categoryController.registerCategory);
router.put('/updateCategory/:id', categoryController.updateCategory);
router.delete('/deleteCategory/:id', categoryController.deleteCategory);
exports.categoriesRouter = router;
