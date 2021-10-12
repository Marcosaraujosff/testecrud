const express = require('express')
const app = express()
const Cadastros = require('./models/cadastros')

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/', express.static(__dirname + '/src')); 

//salvar no banco de dados

app.post("/cadastros", (req, res) =>{
    Cadastros.create({
        cliente: req.body.cliente,
        numero: req.body.numero,
        tipo: req.body.tipo,
        status: req.body.status,
        categoria: req.body.categoria
    }).then(() =>{
        console.log("dados cadastrados com sucesso!")
    }).catch((erro) =>{
        console.log("falha ao salvar os dados."+ erro)
    })
})


app.listen(3000)