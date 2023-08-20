import { Request, Response } from "express";
import Categoria from "../database/models/categoryModel";


export class CategoryController {
    
    async getAllCategorys(request: Request, response: Response) {
        try {
            const categorys = await Categoria.findAll()

            response.status(200).json({categorys: categorys})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: {error}})
        }
    }

    async getCategoryById(request:Request, response:Response) {
        const categoryId = request.params.id;

        try {
            const category = await Categoria.findByPk(categoryId);

            response.status(200).json({category})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }


    async registerCategory(request: Request, response: Response) {
        
        const { id, nome } = request.body;

        try {
            const newCategory = await Categoria.create({id, nome})
            newCategory.save();

            response.status(200).json({newCategory})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async updateRelation(request: Request, response: Response) {
        const id = request.params.id
        const { nome } = request.body;
        try {
            const categoryUpdate = await Categoria.update({nome}, {where:{ id: id}})

            response.status(200).json({relation: categoryUpdate})
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteRelation(request: Request, response: Response) {
        const {id} = request.params

        try {
            const categoryDeleted = await Categoria.destroy({where: { id: id}})

            response.status(200).json({categoryDeleted: categoryDeleted})
        } catch (error) {
            console.error(error)

            response.status(500).json({error: error})
        }
        
    }


}