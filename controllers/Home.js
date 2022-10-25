import fs from 'fs'
export default (req, res) => {
  fs.readFile('./data/chat.json', 'utf8', function (err, data) {
    //on parse les données qui sont dans le ficheir json
    const content = JSON.parse(data)
    //console.log(content);
    //renvoyer ce code html
    res.render('home.ejs', { content: content })
    //res.render('home.ejs', {content:content});
  })
}
