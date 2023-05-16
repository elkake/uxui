import { Router } from 'express'
import Usuario from '../models/usuario'
const router: Router = Router()

router.get('/', async (_req, res) => {
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(),
    Usuario.find({})
  ])
  res.json({
    total,
    usuarios
  })
  console.log('get')
})

router.post('/', async (req, res) => {
  try {
    const { nombre, correo } = req.body
    const usuario = new Usuario({ nombre, correo })
    // Guardar en bd
    await usuario.save()
    //response
    res.json(usuario)
    console.log('post')
  } catch (error) {
    console.log('No se pudo guardar el usuario')
    console.log('-----------------------------')
    console.log(error)
    console.log('-----------------------------')
  }
})

export default router
