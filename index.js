// const express = require ('express');
import express from 'express';
import router from './routes/index.js';


const app = express();


// Definir Puerto -- La variable de entorno aún no existe --
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Agregar router
app.use('/', router);

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`);
});