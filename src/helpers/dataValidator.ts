import UserModel from '../models/usuario'

const emailExiste = async (correo: string): Promise<void> => {
  const existeEmail = await UserModel.findOne({ correo })
  if (existeEmail) {
    throw new Error(`El correo "${correo}" ya existe`)
  }
}

const idExiste = async (id: string): Promise<void> => {
  const existeUsuario = await UserModel.findById(id)
  if (!existeUsuario) {
    throw new Error(`El id "${id}" no existe`)
  }
}

const dataValidator = {
  emailExiste,
  idExiste
}

export default dataValidator
