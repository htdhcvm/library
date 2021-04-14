const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'reader_has_discipline',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            disciplineId: {
                type: Sequelize.INTEGER,
            },
            readerId: {
                type: Sequelize.INTEGER,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        {
            freezeTableName: true,
        }
    );
};
