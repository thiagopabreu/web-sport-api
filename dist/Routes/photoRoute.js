"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoRouter = void 0;
const express_1 = require("express");
const photoController_1 = require("../Controller/photoController");
const multer_1 = __importDefault(require("multer"));
let router = (0, express_1.Router)();
const storage = multer_1.default.diskStorage({
    destination: 'dist/uploads',
    filename: (req, file, callback) => {
        const date = Date.now();
        const filename = file.originalname.replace(/[^a-zA-Z0-9]/g, '_');
        callback(null, date + '-' + filename + '.png');
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const photoController = new photoController_1.PhotoController();
router.get('/readPhoto/:fileName', photoController.readPhoto);
router.get('/getPhoto/:id', photoController.getPhoto);
router.post('/registerUpload', upload.single('file'), photoController.uploadPhoto);
router.put('/updatePhoto/:id', upload.single('file'), photoController.updatePhoto);
router.delete('/deletePhoto/:id', photoController.deleteImage);
exports.photoRouter = router;
