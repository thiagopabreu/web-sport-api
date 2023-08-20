"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const categoryModel_1 = __importDefault(require("../database/models/categoryModel"));
class CategoryController {
    getAllCategorys(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorys = yield categoryModel_1.default.findAll();
                response.status(200).json({ categorys: categorys });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: { error } });
            }
        });
    }
    getCategoryById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoryId = request.params.id;
            try {
                const category = yield categoryModel_1.default.findByPk(categoryId);
                response.status(200).json({ category });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    registerCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome } = request.body;
            try {
                const newCategory = yield categoryModel_1.default.create({ id, nome });
                newCategory.save();
                response.status(200).json({ newCategory });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updateRelation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const { nome } = request.body;
            try {
                const categoryUpdate = yield categoryModel_1.default.update({ nome }, { where: { id: id } });
                response.status(200).json({ relation: categoryUpdate });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteRelation(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                const categoryDeleted = yield categoryModel_1.default.destroy({ where: { id: id } });
                response.status(200).json({ categoryDeleted: categoryDeleted });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.CategoryController = CategoryController;
