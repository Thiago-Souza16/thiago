const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // importar routes.js

const app = express();

mongoose.connect('mongodb+srv://thiago:thiagosc@cluster0-ixgk9.gcp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true  
})

app.use(express.json()); //interação entre o express com json
app.use(routes);

//METODOS HTTP: GET, POST, DELETE E PUT

// tipos de parametros no express: 
//Query Params: request.query (usado para filtros, ordenação, paginação...)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body: request.body (Dados para criação ou alteração de algum registro)

app.listen(3333); //caminho para abrir
