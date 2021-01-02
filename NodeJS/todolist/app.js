const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const date = require(__dirname + '/date.js');
const app = express()

app.set('view engine', 'ejs')

app.use(bodyparser.urlencoded({ extended: false }))

app.use(express.static('public'))

const items = ["Buy Food", "Cook Food", "Eat Food"]
const workItems = []


app.get('/', function (req, res) {
    let day = date.getDate()
    res.render("list", {
        listTitle: day,
        newListItems: items
    })
})

app.post('/', function (req, res) {

    const item = req.body.newItem

    if (req.body.button === 'Work') {
        workItems.push(item)
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect('/')
    }


})

app.get('/work', function (req, res) {

    res.render("list", {
        listTitle: "Work",
        newListItems: workItems
    })
})


app.listen(3000, function () {
    console.log('server is live');
})

