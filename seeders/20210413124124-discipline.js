'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('discipline', [
            {
                name: 'Операционные системы',
            },
            {
                name: 'Сети',
            },
            {
                name: 'Архитектура ЭВМ',
            },
            {
                name: 'Веб программирование',
            },
            {
                name: 'Алгербра',
            },
            {
                name: 'Математическая логика',
            },
            {
                name: 'Базы данных',
            },
            {
                name: 'Проектирование системы',
            },
            {
                name: 'Структуры данных и алгоритмы',
            },
            {
                name: 'Программирование',
            },
            {
                name: 'Физика',
            },
            {
                name: 'Нейронные сети',
            },
            {
                name: 'Безопасноть',
            },
            {
                name: 'Дискретная математика',
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('discipline', null, {});
    },
};
