import fs from 'fs'

export default (req, res) => {
  let id = req.params.id

  fs.readFile('./data/chat.json', 'utf8', function (err, data) {
    //on parse les données qui sont dans le ficheir json
    const content = JSON.parse(data)
    //console.log(content);
    let lechat = content.find((chat) => {
      return chat.id == id
    })
    //renvoyer ce code html
    res.render('kitten.ejs', { lechat: lechat })
  })
}
