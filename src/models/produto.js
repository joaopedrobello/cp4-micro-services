'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Produto', schema)