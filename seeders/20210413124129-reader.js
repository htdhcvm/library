'use strict';
const getHash = require('../helpers/getHash');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('reader', [
            {
                name: 'Серёжа Соснов',
                password: await getHash('1'),
                groupId: 1,
                login: 'serj',
            },
            {
                name: 'Алексей Терешенко',
                password: await getHash('2'),
                groupId: 1,
                login: 'alex',
            },
            {
                name: 'Мари Федина',
                password: await getHash('3'),
                groupId: 1,
                login: 'mary',
            },
            {
                name: 'Сахиб Исмаилов',
                password: await getHash('4'),
                groupId: 1,
                login: 'somebody',
            },
            {
                name: 'Илья Щербаков',
                password: await getHash('5'),
                groupId: 1,
                login: 'ilya',
            },
            {
                name: 'Александр Тихонов',
                password: await getHash('6'),
                groupId: 1,
                login: 'alex',
            },
            {
                name: 'Ермолай Чебыкин',
                password: await getHash('7'),
                groupId: 1,
                login: 'erm',
            },
            {
                name: 'Катя Трофимова',
                password: await getHash('8'),
                groupId: 1,
                login: 'kate',
            },
            {
                name: 'Сергей Шутов',
                password: await getHash('9'),
                groupId: 1,
                login: 'serj',
            },
            {
                name: 'Алан Тедеев',
                password: await getHash('10'),
                groupId: 1,
                login: 'alan_rahmat_hinkal_sila',
            },
            {
                name: 'Никита Черепанов',
                password: await getHash('11'),
                groupId: 1,
                login: 'nik',
            },
            {
                name: 'Евгений Цоль',
                password: await getHash('12'),
                groupId: 1,
                login: 'evgen',
            },
            {
                name: 'Абдуджалил Джумаев',
                password: await getHash('13'),
                groupId: 1,
                login: 'abdudjalil',
            },
            {
                name: 'Иосиф Стальнов',
                password: await getHash('14'),
                groupId: 1,
                login: 'iosif',
            },
            {
                name: 'Гриша Рухлов',
                password: await getHash('15'),
                groupId: 1,
                login: 'grisha',
            },
            {
                name: 'Анастасия Чумакина',
                password: await getHash('16'),
                groupId: 1,
                login: 'nasti',
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('reader', null, {});
    },
};
