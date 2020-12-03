// jshint ignore: start
let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/dashboard', (req, res) => {
    res.render('profile/dashboard');
});


router.get('/dashboard/add', (req, res) => {
    res.render('profile/add');
});

router.post('/dashboard/add', async(req, res) => {
    const { title, brand, type, model, status, price, description, image, track } = req.body;
    const newLink = {
        title,
        brand,
        type,
        model,
        status,
        price,
        description,
        image,
        track
    };
    await pool.query('INSERT INTO ryp_pedal set ?', [newLink]);
    res.send('recibido');
});


module.exports = router;