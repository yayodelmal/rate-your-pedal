let express = require('express');
let router = express.Router();

const pool = require('../db');

router.get('/dashboard', (req, res) => {
    res.render('profile/dashboard');
});

module.exports = router;