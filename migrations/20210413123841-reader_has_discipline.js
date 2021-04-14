'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'reader_has_discipline',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                disciplineId: {
                    type: Sequelize.INTEGER,
                },
                readerId: {
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
        return queryInterface.dropTable('reader_has_discipline');
    },
};
