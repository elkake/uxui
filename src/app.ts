import dotenv from 'dotenv'
import Server from './server/server'

dotenv.config()

const pepe: Server = new Server()
pepe.listen()
