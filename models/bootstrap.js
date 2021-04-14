const sequelize = require('./connection');

const Book = require('./Entity/book');
const Dicipline_has_book = require('./Entity/dicipline_has_book');
const Discipline = require('./Entity/discipline');
const Group = require('./Entity/group');
const Reader = require('./Entity/reader');
const Reader_has_discipline = require('./Entity/reader_has_discipline');

module.exports = () => {
    const book = Book(sequelize);
    const dicipline_has_book = Dicipline_has_book(sequelize);
    const reader_has_discipline = Reader_has_discipline(sequelize);
    const discipline = Discipline(sequelize);
    const group = Group(sequelize);
    const reader = Reader(sequelize);

    group.hasMany(reader);
    reader.belongsTo(group);

    reader.hasMany(reader_has_discipline);
    reader_has_discipline.belongsTo(reader);

    discipline.hasMany(reader_has_discipline);
    reader_has_discipline.belongsTo(discipline);

    discipline.hasMany(dicipline_has_book);
    dicipline_has_book.belongsTo(discipline);

    book.hasMany(dicipline_has_book);
    dicipline_has_book.belongsTo(book);

    return {
        book,
        dicipline_has_book,
        discipline,
        group,
        reader,
        reader_has_discipline,
    };
};
