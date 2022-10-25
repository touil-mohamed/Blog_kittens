import fs from 'fs'

export const DisplayForm = (req, res) => {
  res.render('form.ejs')
}

export const SubmitAddForm = (req, res) => {
  fs.readFile('./data/chat.json', 'utf-8', function (err, data) {
    const content = JSON.parse(data)
    let id = 0
    for (const chat of content) {
      if (chat.id > id) {
        id = chat.id
      }
    }
    id++
    let nvxChat = req.body
    nvxChat.id = id
    content.push(nvxChat)

    let leschat = JSON.stringify(content)
    fs.writeFile('./data/chat.json', leschat, (err) => {
      console.log(err)
      res.redirect('/')
    })
  })
}
