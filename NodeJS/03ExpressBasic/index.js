var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/about', function (req, res) {
  res.send('<h1>Hello there thanks for visiting</h1>')
})

app.listen(3000, () => console.log('server is running at port 3000...'))
