import express, { Request, Response } from 'express';
import { Admin } from '../database/models/userAdminModel';
import bcrypt from 'bcrypt';
export class UserAdminController {
    async registerUser(request: Request, response: Response) {
        try {
            const {user, senha} = request.body;
            const newUser = await Admin.create({user, senha})
            response.status(201).json(newUser)
        } catch (error) {
            console.error(error)
            response.status(500).json({error})
        }
    }

    async login(request: Request, response: Response) {
        try {
            let {user, senha} = request.body;
            const userRequested = await Admin.findOne({where: { user }})

            
            if(!userRequested || !(await userRequested.comparePassword(senha, userRequested.senha))) {
                response.status(401).json({error: 'Invalid email or password! ', user:false})
            } else {
                response.status(200).json({message: 'Authentication sucessful! ', user: true})
            }
        } catch (error) {
            console.log(error)
            response.status(500).json({ error: error})
        }
    }
}