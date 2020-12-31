var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.get('/about', function (req, res) {
  res.send('<h1>Hello there thanks for visiting</h1>')
})


app.get('/ab*cd', function (req, res) {
  res.send('<h1>This is regex</h1>')  //any page starting with ab and ending with cd
})

app.get('/about-us', function (req, res) {
  res.json({
    user:'Rhutik',
    balance:5000,
    id:3249
  })
})


app.get('/user/:id/status/:status_id', function (req, res) {
  res.send(req.params)
})

app.post('/login',(req,res)=>{
  res.send('Login success')
})

app.listen(3000, () => console.log('server is running at port 3000...'))


// res.download()
// res.end()
// res.json()
// res.send()
// res.render()
// res.redirect()
// res.status()
