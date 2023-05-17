import dotenv from 'dotenv'
import Server from './server/server'

dotenv.config()

const server: Server = new Server()
server.listen()
