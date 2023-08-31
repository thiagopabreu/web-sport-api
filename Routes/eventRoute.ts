import { Router } from "express";
import { EventController } from "../Controller/eventController";


let router = Router()

const eventController = new EventController();

router.get('/getEvents', eventController.getAllEvents)
router.get('/getEvent/:id', eventController.getEventById)

router.post('/registerEvent', eventController.registerEvent)

router.put('/updateEvent/:id', eventController.updateEvent)

router.delete('/deleteEvent/:id', eventController.deleteEvent)

export const eventRouter = router;