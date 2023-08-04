import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { //req - lo que enviamos // res - lo que express nos muestra
    res.render('inicio', {
        pagina: 'Inicio',
    });
});

router.get('/Nosotros', (req, res) => { 
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
});

router.get('/Viajes', (req, res) => { 
    res.render('viajes',{
        pagina: 'Viajes'
    });
});

router.get('/Testimoniales', (req, res) => { 
    res.render('testimonio',{
        pagina: 'Testimonios'
    });
});

export default router;