const { authenticate } = require('../middlewares/auth');

module.exports = app => {
    const controller = require('../controllers/users')();

    app.route('/api/v1/users')
        .get(authenticate, controller.listUsers);

    // app.route('/api/v1/users/:id')
    //     .get(controller.findOne);
    app.route('/api/v1/users')
        .post(controller.createUser);

    app.route('/api/v1/users/:id')
        .get(authenticate,controller.findById);
}