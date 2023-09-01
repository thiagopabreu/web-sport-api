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
exports.PhotoController = void 0;
const photosModel_1 = require("../database/models/photosModel");
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
class PhotoController {
    readPhoto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = request.params.fileName;
            response.sendFile(path_1.default.join(__dirname, '../uploads', fileName));
        });
    }
    getPhoto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            try {
                const photo = yield photosModel_1.Foto.findByPk(id);
                if (photo) {
                    const imageBuffer = photo.imagem_data;
                    response.setHeader('Content-Type', 'image/png');
                    response.status(200).send(imageBuffer);
                }
                else {
                    response.status(404).send('Imagem não encontrada');
                }
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    uploadPhoto(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('entrei aqui');
                const uploadedFileName = (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename;
                const imagePath = `../noticia-esporte-back/dist/uploads/${uploadedFileName}`;
                const imageBuffer = yield promises_1.default.readFile(imagePath);
                console.log(imageBuffer);
                const foto = yield photosModel_1.Foto.create({ caminho: uploadedFileName, imagem_data: imageBuffer });
                foto.save();
                yield promises_1.default.unlink(imagePath);
                response.status(200).json({ foto: foto });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error });
            }
        });
    }
    updatePhoto(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const photoId = request.params.id;
            const file = (_a = request.file) === null || _a === void 0 ? void 0 : _a.filename;
            const uploadsPath = path_1.default.join(__dirname, '../uploads');
            try {
                const oldFile = yield photosModel_1.Foto.findByPk(photoId);
                const oldImagePath = path_1.default.join(uploadsPath, oldFile.caminho);
                yield promises_1.default.unlink(oldImagePath).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield photosModel_1.Foto.update({ caminho: file }, { where: { id: photoId } });
                    response.status(200).json({ message: 'Imagem atualizada' });
                }));
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
    deleteImage(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const photoId = request.params.id;
            const uploadsPath = path_1.default.join(__dirname, '../uploads');
            try {
                const file = yield photosModel_1.Foto.findByPk(photoId);
                const imagePath = path_1.default.join(uploadsPath, file === null || file === void 0 ? void 0 : file.caminho);
                promises_1.default.unlink(imagePath).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield photosModel_1.Foto.destroy({ where: { id: photoId } });
                    response.status(200).json({ message: 'Arquivo deletado com sucesso!' });
                }));
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: error });
            }
        });
    }
}
exports.PhotoController = PhotoController;
