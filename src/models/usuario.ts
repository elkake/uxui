import { Schema, model } from 'mongoose'

interface Usuario {
  nombre: string
  correo: string
  contrasena: String
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
  }
})

export default model('Usuario', usuarioSchema)
