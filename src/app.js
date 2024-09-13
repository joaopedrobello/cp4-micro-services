const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017');

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//registrar os models
//criar rotas
require('./models/produto')

const produtoRouter = require('./routes/produto-route');

app.use('/produtos', produtoRouter)

module.exports = app;