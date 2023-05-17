import mongoose from 'mongoose'

const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI ?? '')

    console.log('Conexion exitosa a la base de datos Test')
  } catch (e) {
    console.log('Conexion fallida a la base de datos Test')
    console.log('-----------------------------------------')
    console.log(e)
    console.log('-----------------------------------------')
  }
}

export default dbConnection
