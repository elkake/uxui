import { Request, Response } from 'express'
import User from '../models/usuario'
import usuario from '../models/usuario'

export async function getUsers(res: Response) {
  console.log('----Consultando----')

  try {
    const [total, usuarios] = await Promise.all([
      User.countDocuments(),
      User.find({})
    ])

    res.status(200).json({ total, usuarios })

    console.log('get')
  } catch (error) {
    console.log('Se presento un error consultando el usuario en la bd')
    console.log(error)
    res.status(400)
  }
}

export async function getUserByEmail(
  _req: Request,
  res: Response,
  correo: string
) {
  try {
    console.log('-------------correo-------------')
    console.log(correo)

    // Buscar el usuario por su correo electrónico
    const user = await usuario.findOne({ correo })

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    return res.status(200).json(user)
  } catch (error) {
    console.log('No se pudo obtener el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

export async function checkLogin(req: Request, res: Response) {
  try {
    const { correo, contrasena } = req.body
    console.log('-------------correo y password-------------')
    console.log(correo)

    // Buscar el usuario por su correo electrónico
    const user = await usuario.findOne({ correo })

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    if (contrasena !== user.contrasena) {
      return res
        .status(401)
        .json({ mensaje: 'La contrasena del usuario no existe' })
    }
    return res.status(200).json({ mensaje: 'Ingreso exitoso' })
  } catch (error) {
    console.log('No se pudo obtener el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const { id } = req.params
    console.log('-------------id-------------')
    console.log(id)

    // Buscar el usuario por su correo electrónico
    const user = await usuario.findById(id)

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    return res.status(200).json(user)
  } catch (error) {
    console.log('No se pudo obtener el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

export async function createUsers(req: Request, res: Response) {
  try {
    const { nombre, correo, contrasena } = req.body

    // Verificar si el correo electrónico ya existe en la base de datos
    const usuarioExistente = await usuario.findOne({ correo })

    if (usuarioExistente) {
      return res
        .status(409)
        .json({ mensaje: 'El correo electrónico ya está registrado' })
    }

    // Crear el nuevo usuario
    const user = new usuario({ nombre, correo, contrasena })
    await user.save()

    return res
      .status(201)
      .json({ mensaje: 'El usuario ha sido creado correctamente' })
  } catch (error) {
    console.log('No se pudo crear el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { nombre, correo, contrasena } = req.body
    console.log(id)

    const user = await usuario.findByIdAndUpdate(
      id,
      { nombre, correo, contrasena },
      { new: true }
    )

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    return res.status(200).json(user)
  } catch (error) {
    console.log('No se pudo actualizar el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params

    const user = await usuario.findByIdAndDelete(id)

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' })
    }

    return res.status(200).json({ mensaje: 'Usuario eliminado exitosamente' })
  } catch (error) {
    console.log('No se pudo eliminar el usuario')
    console.log('-----------------------------')
    console.log(error)
    return res.status(500).json({ mensaje: 'Error interno del servidor' })
  }
}
