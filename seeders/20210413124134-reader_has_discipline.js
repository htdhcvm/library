'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('reader_has_discipline', [
            {
                disciplineId: 1,
                readerId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 9,
                readerId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 11,
                readerId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 6,
                readerId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 9,
                readerId: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 12,
                readerId: 9,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 8,
                readerId: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 4,
                readerId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 10,
                readerId: 12,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 10,
                readerId: 13,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 14,
                readerId: 14,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 6,
                readerId: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 10,
                readerId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 5,
                readerId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 6,
                readerId: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 10,
                readerId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 5,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 6,
                readerId: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 10,
                readerId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 5,
                readerId: 8,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 6,
                readerId: 9,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 10,
                readerId: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 7,
                readerId: 11,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 12,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 3,
                readerId: 13,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 4,
                readerId: 14,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 6,
                readerId: 15,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                disciplineId: 14,
                readerId: 16,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('reader_has_discipline', null, {});
    },
};
