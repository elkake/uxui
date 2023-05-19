import { Schema, model } from 'mongoose'

interface Usuario {
  nombre: string
  correo: string
  contrasena: string
  rol: string
  estado: boolean
}

const usuarioSchema: Schema<Usuario> = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  correo: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true
  },
  contrasena: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  rol: {
    type: String,
    default: 'USER_ROLE',
    enum: ['BUSS_ROLE', 'USER_ROLE']
  },
  estado: {
    type: Boolean,
    default: true
  }
})

export default model('Usuario', usuarioSchema)
