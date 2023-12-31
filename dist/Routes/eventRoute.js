"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const express_1 = require("express");
const eventController_1 = require("../Controller/eventController");
let router = (0, express_1.Router)();
const eventController = new eventController_1.EventController();
router.get('/getEvents', eventController.getAllEvents);
router.get('/getEvent/:id', eventController.getEventById);
router.post('/registerEvent', eventController.registerEvent);
router.put('/updateEvent/:id', eventController.updateEvent);
router.delete('/deleteEvent/:id', eventController.deleteEvent);
exports.eventRouter = router;
