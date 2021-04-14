'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
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
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('group');
    },
};
