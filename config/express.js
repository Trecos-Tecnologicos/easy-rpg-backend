const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    require('../app/routes/users')(app);
    require('../app/routes/weapons')(app);
    require('../app/routes/auth')(app);
    require('./db')(app);

    return app;
};