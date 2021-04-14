const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'reader',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            login: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING(255),
            },
            groupId: {
                type: Sequelize.INTEGER,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        {
            freezeTableName: true,
        }
    );
};
