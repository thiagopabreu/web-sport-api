import { Router } from "express";
import { UserAdminController } from "../Controller/userAdminController";


let router = Router();

const userAdminController = new UserAdminController()

router.post('/register', userAdminController.registerUser)
router.post('/login', userAdminController.login)

export const userAdminRouter = router;