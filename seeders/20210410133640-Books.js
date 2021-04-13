'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Books', [
            
        ])
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Books', null, {});
    },
};
