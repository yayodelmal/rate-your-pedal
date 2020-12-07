const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.use('local.signup', new localStrategy({
    usernameField: 'nombre',
    passportField: 'pass',
    passReqToCallback: 'true',
}, async(req, nombre, pass, done) => {
    console.log(req.body);
}));

/*
passport.serializeUser((usr, done) => {

});
*/