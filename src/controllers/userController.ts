import { Request, Response } from "express";
import User from "../models/user";

export async function getUsers(res:Response) {
    
    const [total, usuarios] = await Promise.all([
        User.countDocuments({ estado: true }),
        User.find({ estado: true })
    ])

    res.status(200).json({total, usuarios});
}

export async function createUsers(req: Request, res:Response) {
    const { nombre, apellido, telefono, email, contrasena, rol, estado } = req.body;
    const usuario = new User({nombre, apellido, telefono, email, contrasena, rol, estado});
    await usuario.save();
    res.status(200); 
}
