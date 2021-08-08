const express = require('express');
const path = require('path');
const port = 3030;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'registro.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'viwes', 'login.html'))
})

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'search.html'))
})

app.use(express.static("public"))
//app.use(express.static(""))

app.listen(port, () => console.log('Server runing in localhost:3030'))