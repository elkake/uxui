import express from 'express'
import cors from 'cors'
import dbConnection from '../database/dbConnection'
import routerUser from '../routes/user.routes'
import routerAuth from '../routes/auth.routes'

class Server {
  private app: express.Application
  private port: string
  private usuariosPath: string
  private usuariosAuth: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'
    // Define ruta de mis usuarios
    this.usuariosPath = '/api/usuarios'
    this.usuariosAuth = '/api/auth'
    // Conectar a base de datos
    this.conectarDB()
    // Middlewares
    this.middlewares()
    // Rutas de mi aplicacion
    this.routes()
  }

  async conectarDB() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(express.static('src/public'))
    // serializa objetos json
    this.app.use(express.json())
    // permite la conexion de otros servidores
    this.app.use(cors())
  }

  routes() {
    // en este middleware se definen las rutas
    // ! router es una ruta de ejemplo, colocar la suya
    this.app.use(this.usuariosPath, routerUser)
    this.app.use(this.usuariosAuth, routerAuth)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor levantado en el puerto: ', this.port)
    })
  }
}

export default Server
