const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/submit', urlencodedParser, function (req, res) {
    res.render('submit', {person: req.body})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
console.log("http://127.0.0.1:3000/")
