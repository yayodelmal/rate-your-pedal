let express = require('express');
let router = express.Router();



const pool = require('../db');

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

module.exports = router;