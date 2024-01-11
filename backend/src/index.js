const express = require("express")
const path = require("path")
const app = express()
const collection = require("./mongodb")
const port = process.env.PORT || 3000
const http = require("node:http")
const fs = require("node:fs")

const templatesPath = path.join(__dirname, '../templates')
const publicPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', templatesPath)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(publicPath))

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/', (req, res) => {
    res.render('login')
})

app.post('/signup', async (req, res) => {
    const data = {
        name:req.body.name,
        password:req.body.password
    }

    try {
        const checking = await collection.findOne({name:req.body.name})
        if (checking.name === req.body.name) {
            res.status(201).render('signup', {errorMsg: "This account already exists. "})
        } else {
            await collection.insertMany([data])
            res.render("login")
        }
    } catch (e) {
        await collection.insertMany([data])
        res.render("login")
        console.log(e)
    }
})

app.post('/login', async (req, res) => {
    try {
        const check = await collection.findOne({name:req.body.name})
        if (check.password === req.body.password) {
            res.redirect('https://travispanuts.github.io/ecommerce/')
        } else {
            res.status(201).render('login', {errorMsg: "Incorrect password."})
        }
    } catch {
        res.status(201).render('login', {errorMsg: "This account has not signed up."})
    }
})

app.listen(port, () => {
    console.log('port connected')
})