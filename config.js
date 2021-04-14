require('dotenv').config();
require('./models/connection');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes/');

module.exports = (app) => {
    app.use(bodyParser.json());

    app.use(
        expressSession({
            secret: process.env.SECRET_SESSION,
            resave: true,
            saveUninitialized: true,
            cookie: {
                secure: false,
                maxAge: 1000 * 60 * 60,
            },
        })
    );

    app.use('/api', routes);
};
