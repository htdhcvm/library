const BookDTO = require('../dto/BookDTO');

module.exports = (dataFromDb) => {
    return dataFromDb.map((book) => {
        let tmp = {};
        tmp.id = book.dataValues.id;
        tmp.title = book.dataValues.title;
        tmp.creator = book.dataValues.creator;

        book.dataValues.dicipline_has_books.forEach((d_h_b) => {
            tmp.nameDisiplice = d_h_b.dataValues.discipline.dataValues.name;
        });

        return new BookDTO({ ...tmp });
    });
};
