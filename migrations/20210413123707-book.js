'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'book',
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                title: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                creator: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                subject: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                description: {
                    type: Sequelize.STRING(5000),
                    allowNull: true,
                },
                publisher: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                contributor: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                typeCover: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                date: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                type: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                format: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                countPages: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                identifier: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                language: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                coverage: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
                coutInstance: {
                    type: Sequelize.INTEGER,
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
        return queryInterface.dropTable('book');
    },
};
