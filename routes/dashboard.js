let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/dashboard', (req, res) => {
    res.render('profile/dashboard');
});


router.get('/dashboard/add', (req, res) => {
    res.render('profile/add');
});

router.post('/dashboard/add', (req, res) => {
    console.log(req.body);
    res.send('recibido');
});
module.exports = router;