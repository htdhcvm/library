'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        let res = [];
        for (let i = 0; i < 14; i++) {
            let tmp = [];
            for (let j = 0; j < 16; j++) {
                tmp.push({
                    disciplineId: i + 1,
                    readerId: j + 1,
                });
            }
            res.push(...tmp);
        }

        return queryInterface.bulkInsert('reader_has_discipline', res);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('reader_has_discipline', null, {});
    },
};
