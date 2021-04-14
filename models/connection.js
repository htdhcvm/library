const { Sequelize } = require('sequelize');

const base = {
    dialect: process.env.DB_DIALECT,
    database: process.env.DB_NAME,
    logging: false,
};

const sequelize = new Sequelize({
    ...base,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

(async () => {
    sequelize
        .authenticate()
        .then((_) => {
            console.log('Connection was successfully completes');
        })
        .catch((e) => {
            console.log('Error', e);
        });
})();

module.exports = sequelize;
