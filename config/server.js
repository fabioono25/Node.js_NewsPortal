const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

//body-parser é um middleware
app.use(bodyParser.urlencoded({extended: true})) //atraves de json
app.use(expressValidator())

//identificacao de diretorio com informacoes estaticas
app.use(express.static('./app/public'))

//diretorio quer incluir automaticamente na aplicacao
consign()
    .include('app/routes')
    .then('config/dbConnection.js') //necessario para evitar um carregamento em loop (necessario a extensao)
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app;