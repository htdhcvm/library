const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'reader_has_book',
        {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            statusRead: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            readerId: {
                type: Sequelize.INTEGER,
            },
            bookId: {
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
