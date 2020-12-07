let express = require('express');
let router = express.Router();

const passport = require('passport');

const pool = require('../db');
/* 
router.post('/signup', (req, res) => {
        passport.authenticate('local.signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/',
            failureFlash: true
        }))
*/
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
}));

module.exports = router;