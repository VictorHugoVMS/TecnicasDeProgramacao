//fazer a importação do express
const express = require('express')
const router = require('./routes/index')

//conf. básicas do app
const app = express();
app.use('/', router);//foi passado apenas uma rota, pois criamos apenas uma

app.use(express.json());//requisicoes post sao tratados como get

//get = buscar ->pode buscar todos os dados ou um dado
//post = inserir
//push = alterar
//delete  = deleta

module.exports = app;