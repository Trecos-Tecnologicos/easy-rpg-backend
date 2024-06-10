const { register, login } = require('../controllers/auth');

module.exports = app => {
    const controller = require('../controllers/users')();

    app.route('/api/v1/users/register')
        .post(register);

    app.route('/api/v1/users/login')
        .post(login);
}