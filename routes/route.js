import express from 'express'

const router = express.Router()

//import controller
import HomeController from '../controllers/Home.js'
import KittensController from '../controllers/Kittens.js'
import { DisplayForm, SubmitAddForm } from '../controllers/addCat.js'

router.get('/', HomeController)
//lire le jso)
router.get('/kitten/:id', KittensController)
router.get('/form', DisplayForm)
router.post('/form', SubmitAddForm)
export default router
