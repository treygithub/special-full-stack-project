const passport = require('passport');

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('http://localhost:3000/#/login');
    });
};

const getAdmins = (req, res) => {

    console.log(req.admins)
    if (!req.admins) {
        res.status(500).send({ message: 'Not Logged In' });
    } else {
        res.status(200).send(req.admins);
    }
};

const login = passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:3000/#/login'
});

const newAdmins = (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db");
    const {
        employee_name
    } = req.body;
    db.add_Admins([
        employee_name
    ]).then(() => res.status(200).send("All set"))
        .catch(e => res.status(500).send("Something went horribly wrong"));
};


module.exports = {
    logout,
    login,
    getAdmins,
    newAdmins
};