'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('discipline', [
            {
                name: 'Операционные системы',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Сети',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Архитектура ЭВМ',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Веб программирование',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Алгербра',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Математическая логика',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Базы данных',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Проектирование системы',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Структуры данных и алгоритмы',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Программирование',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Физика',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Нейронные сети',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Безопасноть',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Дискретная математика',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('discipline', null, {});
    },
};
