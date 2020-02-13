const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');



//Iniciando o APP
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// Require na pasta com o arquivo do Schema
requireDir('./src/models');

//const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);