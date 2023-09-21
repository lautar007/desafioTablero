const express = require('express');
const ejs = require('ejs');
const app = express();
const tablero = require('./modules/tablero');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/modules"))

app.get('/',(req, res)=>{
    res.render('home', {tablero});
})

app.listen(3000, ()=>{
    console.log('Servidor escuchando en puerto 3000');
})