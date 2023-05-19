import { Router } from 'express'
import { checkLogin } from '../controllers/userAuth'

const routerAuth: Router = Router()

routerAuth.post('/login', checkLogin)

export default routerAuth
