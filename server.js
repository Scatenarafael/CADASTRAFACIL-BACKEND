const express = require('express');
const app = express();
const port = 3333;
const mongoose = require('mongoose');

const clientRoute = require('./routes/clientRoute')


mongoose.connect('mongodb://localhost/cadastrafacil', { useUnifiedTopology: false, useUnifiedTopology: true, useNewUrlParser: true });

let db = mongoose.connection;

db.on('error', () => { console.log("Houve um erro") });
db.once('open', () => { console.log("Banco carregado") });

app.use('/', clientRoute);



app.listen(port, () => { console.log(`Server running on port ${port}`) });