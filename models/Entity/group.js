const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'group',
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
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        {
            freezeTableName: true,
        }
    );
};
