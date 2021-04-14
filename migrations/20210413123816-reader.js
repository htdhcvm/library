'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
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
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('reader');
    },
};
