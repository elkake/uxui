import { Request, Response } from 'express'
import UserModel from '../models/usuario'

export async function checkLogin(req: Request, res: Response) {
  try {
    const { correo, contrasena } = req.body
    console.log('-------------correo y password-------------')
    console.log(correo)
    console.log('provando provando provando')
    // Buscar el usuario por su correo electrónico
    const user = await UserModel.findOne({ correo })

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    if (contrasena !== user.contrasena) {
      return res
        .status(401)
        .json({ mensaje: 'La contrasena del usuario no coincide' })
    }
    return res.status(200).json({ mensaje: 'Ingreso exitoso' })
  } catch (error) {
    console.log('No se pudo obtener el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}
