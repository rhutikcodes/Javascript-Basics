var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/about', function (req, res) {
  res.send('<h1>Hello there thanks for visiting</h1>')
})

app.post('/login', (req, res) => {
  res.send('login success')
})
app.delete('/user', (req, res) => {
  res.send('delete success')
})

//ids
app.get('/user:id/status/:STATUS_ID', (req, res) => {
  res.send(req.params)
})

app.get('/user:id', (req, res) => {
  res.send(req.params)
})
app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params)
})

//regular expression

//ab*cd - any string that starts with ab and ends with cd
app.get('/ab*bc', (req, res) => {
  res.send('regular expression')
})
app.get('/**', (req, res) => {
  res.send('regular expression')
})

app.listen(3000, () => console.log('server is running at port 3000...'))
