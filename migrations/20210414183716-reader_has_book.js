'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'reader_has_book',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                statusRead: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                },
                readerId: {
                    type: Sequelize.INTEGER,
                },
                bookId: {
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
        return queryInterface.dropTable('reader_has_book');
    },
};
