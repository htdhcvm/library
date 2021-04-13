'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Books', {
            id: {
                type: Sequelize.INT,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            Title: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Creator: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Subject: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Description: {
                type: Sequelize.STRING(500),
                allowNull: true,
            },
            Publisher: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Contributor: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            TypeCover: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Date: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Type: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Format: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            CountPages: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Identifier: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Language: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            Coverage: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Books');
    },
};
