"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = require("express");
const gamesController_1 = require("../Controller/gamesController");
let router = (0, express_1.Router)();
const gameController = new gamesController_1.GameController();
router.get('/getGames', gameController.getAllGames);
router.get('/getAGame/:id', gameController.getGameById);
router.get('/getGameByRoundId/:id', gameController.getGameByRound);
router.post('/registerGame', gameController.registerGame);
router.put('/updateGame/:id', gameController.updateGame);
router.delete('/deleteGame/:id', gameController.deleteGame);
exports.gameRouter = router;
