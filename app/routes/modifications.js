const { authenticate } = require('../middlewares/auth');

module.exports = app => {
    const controller = require('../controllers/modifications')();

    app.route('/api/v1/modifications')
        .get(authenticate, controller.listModifications);

    app.route('/api/v1/modifications')
        .post(authenticate, controller.createModification);
}