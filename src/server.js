const express = require('express');
const route = require('./routes');

const app = express();


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(route);

app.listen(PORT,()=>{
    console.log('Servidor iniciado com sucesso!');
})

