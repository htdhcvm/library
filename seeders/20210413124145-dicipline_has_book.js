'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('dicipline_has_book', [
            {
                disciplineId: 1,
                bookId: 3,
                statusRead: false,
            },
            {
                disciplineId: 2,
                bookId: 1,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 2,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 10,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 11,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 12,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 13,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 14,
                statusRead: false,
            },
            {
                disciplineId: 3,
                bookId: 15,
                statusRead: false,
            },
            {
                disciplineId: 4,
                bookId: 17,
                statusRead: false,
            },
            {
                disciplineId: 4,
                bookId: 18,
                statusRead: false,
            },
            {
                disciplineId: 4,
                bookId: 19,
                statusRead: false,
            },
            {
                disciplineId: 4,
                bookId: 20,
                statusRead: false,
            },
            {
                disciplineId: 4,
                bookId: 21,
                statusRead: false,
            },
            {
                disciplineId: 5,
                bookId: 33,
                statusRead: false,
            },
            {
                disciplineId: 5,
                bookId: 34,
                statusRead: false,
            },
            {
                disciplineId: 5,
                bookId: 35,
                statusRead: false,
            },
            {
                disciplineId: 6,
                bookId: 22,
                statusRead: false,
            },
            {
                disciplineId: 6,
                bookId: 23,
                statusRead: false,
            },
            {
                disciplineId: 6,
                bookId: 24,
                statusRead: false,
            },
            {
                disciplineId: 6,
                bookId: 25,
                statusRead: false,
            },
            {
                disciplineId: 6,
                bookId: 26,
                statusRead: false,
            },
            {
                disciplineId: 6,
                bookId: 27,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 27,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 28,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 29,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 30,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 31,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 32,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 38,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 39,
                statusRead: false,
            },
            {
                disciplineId: 7,
                bookId: 49,
                statusRead: false,
            },
            {
                disciplineId: 8,
                bookId: 37,
                statusRead: false,
            },
            {
                disciplineId: 9,
                bookId: 4,
                statusRead: false,
            },
            {
                disciplineId: 9,
                bookId: 6,
                statusRead: false,
            },
            {
                disciplineId: 9,
                bookId: 7,
                statusRead: false,
            },
            {
                disciplineId: 10,
                bookId: 5,
                statusRead: false,
            },
            {
                disciplineId: 10,
                bookId: 16,
                statusRead: false,
            },
            {
                disciplineId: 10,
                bookId: 41,
                statusRead: false,
            },
            {
                disciplineId: 10,
                bookId: 42,
                statusRead: false,
            },
            {
                disciplineId: 10,
                bookId: 43,
                statusRead: false,
            },
            {
                disciplineId: 10,
                bookId: 50,
                statusRead: false,
            },
            {
                disciplineId: 11,
                bookId: 8,
                statusRead: false,
            },
            {
                disciplineId: 11,
                bookId: 9,
                statusRead: false,
            },
            {
                disciplineId: 12,
                bookId: 44,
                statusRead: false,
            },
            {
                disciplineId: 12,
                bookId: 45,
                statusRead: false,
            },
            {
                disciplineId: 12,
                bookId: 46,
                statusRead: false,
            },
            {
                disciplineId: 13,
                bookId: 47,
                statusRead: false,
            },
            {
                disciplineId: 13,
                bookId: 48,
                statusRead: false,
            },
            {
                disciplineId: 14,
                bookId: 36,
                statusRead: false,
            },
            {
                disciplineId: 14,
                bookId: 40,
                statusRead: false,
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('dicipline_has_book', null, {});
    },
};
