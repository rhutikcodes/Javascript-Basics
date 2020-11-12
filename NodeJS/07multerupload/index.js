const multer = require('multer')
const express = require('express')
const path = require('path')

let app = express()
let port = process.env.PORT || 3000

//multer

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/myupload')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  }
})

var upload = multer({ storage: storage }).single('profilepic')

//setup for ejs

app.set('view engine', 'ejs')

//static folder
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('index')
})

//Desc
app.post('/upload', (req, res) => {
  upload(req, res, error => {
    if (error
) {
      res.render('index', {
        message: error
      })
    } else {
      res.render('index', {
        message: 'Successfully Uploaded',
        filename: `myupload/${req.file.filename}`
      })
    }
  })
})

app.listen(port, () => console.log(`app is running at ${port}`))
