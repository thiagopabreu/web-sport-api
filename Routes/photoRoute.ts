import { Router } from "express";
import { PhotoController } from "../Controller/photoController";
import multer from "multer";

let router = Router();

const storage = multer.diskStorage({
    destination: 'dist/uploads',
    filename: (req, file, callback) => {
        const date = Date.now()

        const filename = file.originalname.replace(/[^a-zA-Z0-9]/g, '_')
        callback(null, date + '-' + filename + '.png')
    }
})

const upload = multer({storage: storage})

const photoController = new PhotoController();

router.get('/readPhoto/:fileName', photoController.readPhoto)
router.post('/registerUpload', upload.single('file'), photoController.uploadPhoto)
router.put('/updatePhoto/:id', upload.single('file'), photoController.updatePhoto)
router.delete('/deletePhoto/:id', photoController.deleteImage)

export const photoRouter = router;