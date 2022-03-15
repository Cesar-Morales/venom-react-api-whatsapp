let db = require('./db.json');
const express = require('express')
const app = express()

//seteo de configuracion basica en express
app.set("port", 5000)

app.use(express.json())

app.get('/estado', (req, res) => {
    const estado = db.find(each => each.id === 1);
    res.send("Estado actual " + ((estado.conectada)? "Conectado" : "Desconectado"));
})

app.post('/cambiar-estado', (req, res) => {
    const estado = db.find(each => each.id === 1);
    estado.conectada = req.body.conectada;
    res.send('Estado cambiado a ' + ((estado.conectada)? "Conectado" : "Desconectado"));
})


app.listen(app.get("port"), () => {
    console.log(`Example app listening at http://localhost:${app.get("port")}`)
})