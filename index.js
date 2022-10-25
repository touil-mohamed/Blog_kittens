import express from 'express'
import router from './routes/route.js'

const app = express()
// utilisation du router
//définition du répertoire des fichiers public
app.use(express.static('public'))
app.use(express.json()) //Recuperer les datas au format json
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(3000, 'localhost', () => {
  console.log('serveur démarré sur http://localhost:3000')
})
