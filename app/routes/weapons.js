const { authenticate } = require('../middlewares/auth');

module.exports = app => {
    const controller = require('../controllers/weapons')();

    app.route('/api/v1/weapons')
        .get(authenticate, controller.listWeapons);

    app.route('/api/v1/weapons')
        .post(authenticate, controller.createWeapon);
}