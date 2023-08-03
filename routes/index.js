import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { //req - lo que enviamos // res - lo que express nos muestra
    res.send('Inicio');
});

router.get('/Nosotros', (req, res) => { //req - lo que enviamos // res - lo que express nos muestra
    res.send('Nosotros');
});

router.get('/Contacto', (req, res) => { //req - lo que enviamos // res - lo que express nos muestra
    res.send('Contacto');
});