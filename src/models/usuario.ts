import { Schema, model } from 'mongoose'

interface Usuario {
  nombre: string
  correo: string
}

const usuarioSchema: Schema<Usuario> = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  correo: {
    type: String,
    required: [true, 'El email es obligatorio']
  }
})

export default model('Usuario', usuarioSchema)
