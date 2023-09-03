import { Request, Response } from "express";
import multer from "multer";
import { Foto } from "../database/models/photosModel";
import path from "path";
import fs from 'fs/promises'

export class PhotoController {

    async readPhoto(request: Request, response: Response) {
        const fileName = request.params.fileName;
        response.sendFile(path.join(__dirname, '../uploads', fileName))
    }
    
    async getPhoto(request: Request, response: Response) {
        const id = request.params.id
        try {
            const photo = await Foto.findByPk(id)
            if(photo) {
                const imageBuffer = photo.imagem_data

                response.setHeader('Content-Type', 'image/png')

                response.status(200).send(imageBuffer)
            } else {
                response.status(404).send('Imagem não encontrada')
            }
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async uploadPhoto(request: Request, response: Response) {
        try {
            console.log('entrei aqui')
            const uploadedFileName = request.file?.filename;
            const imagePath = `/uploads/${uploadedFileName}`

            const imageBuffer = await fs.readFile(imagePath)
            console.log(imageBuffer)
            const foto = await Foto.create({caminho: uploadedFileName, imagem_data: imageBuffer})
            foto.save();

            await fs.unlink(imagePath)
            response.status(200).json({foto: foto})
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
        // try {
        //     const uploadedFileName = request.file?.filename;
        //     const foto = await Foto.create({caminho: uploadedFileName})
        //     foto.save();
        //     response.status(200).json({ message: 'Arquivo enviado com sucesso!', foto: foto });
        // } catch (error) {
        //     console.log(error)
        //     response.status(500).json({error: error})
        // }
    }

    async updatePhoto(request: Request, response: Response) {
        const photoId = request.params.id;
        const file: any = request.file?.filename
        const uploadsPath = `/uploads/${file}`
        try {
            const imageBuffer = await fs.readFile(uploadsPath)
            const imageUpdated = await Foto.update({caminho: uploadsPath, imagem_data: imageBuffer}, {where: {id: Number(photoId)}})
            await fs.unlink(uploadsPath).then(async () => {
                response.status(200).json({message: 'Imagem atualizada', imageUpdated, photoId, uploadsPath})  
            })
                          
        } catch (error) {

            console.error(error)
            response.status(500).json({error: error})
        }
    }

    async deleteImage(request: Request, response: Response) {
        const photoId = request.params.id;
        const file: any = request.file?.filename
        const uploadsPath = `/uploads/${file}`
        try {
            const photoDeleted = await Foto.destroy({where: { id: photoId }})
            response.status(200).json(photoDeleted)
        } catch (error) {
            console.error(error)
            response.status(500).json({error: error})
        }
                
    }
}