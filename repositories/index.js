const { Op } = require('sequelize');
const mapperFromSearch = require('../models/mappers/fromSearch');
const CollectionSearchBookDTO = require('../models/dto/CollectionBooksDTO');
const BookHasDisiplineDTO = require('../models/dto/BookHasDisiplineDTO');
const mapperToBookHasDisipline = require('../models/mappers/toBookHasDisipline');

class Repository {
    constructor(
        book,
        dicipline_has_book,
        discipline,
        group,
        reader,
        reader_has_discipline,
        reader_has_book
    ) {
        this.book = book;
        this.dicipline_has_book = dicipline_has_book;
        this.reader_has_discipline = reader_has_discipline;
        this.discipline = discipline;
        this.group = group;
        this.reader = reader;
        this.reader_has_book = reader_has_book;
    }

    async checkOnExistUser(login) {
        const responseDb = await this.reader.findOne({
            where: {
                login,
            },
        });

        if (responseDb === null) {
            return false;
        }

        return true;
    }

    async getIdGroupOnName(group) {
        const responseDb = await this.group.findOne({
            where: {
                name: group,
            },
        });

        if (responseDb === null) return false;
        return responseDb.dataValues.id;
    }

    async createNewUser(login, password, groupId, name) {
        const responseDb = await this.reader.create({
            name,
            login,
            password,
            groupId,
        });

        return responseDb.dataValues.id;
    }

    async getPassword(login) {
        const responseDb = await this.reader.findOne({
            where: {
                login,
            },
        });

        return responseDb.dataValues.password;
    }

    async getIdUserOnLogin(login) {
        const responseDb = await this.reader.findOne({
            where: {
                login,
            },
        });

        return responseDb.dataValues.id;
    }

    async search(searchWord) {
        const responseDb = await this.book.findAll({
            where: {
                title: {
                    [Op.substring]: searchWord,
                },
            },
            include: {
                model: this.dicipline_has_book,
                include: {
                    model: this.discipline,
                },
            },
        });

        return new CollectionSearchBookDTO(mapperFromSearch(responseDb));
    }

    async getAllBooksWithDispipiline() {
        const responseDb = await this.book.findAll({
            limit: 50,
            include: {
                model: this.dicipline_has_book,
                include: {
                    model: this.discipline,
                },
            },
        });

        return new CollectionSearchBookDTO(mapperFromSearch(responseDb));
    }

    async getAllGroups() {
        const responseDb = await this.group.findAll();

        return responseDb.map((group) => {
            return group.dataValues.name;
        });
    }

    async getAllDiciplines() {
        const responseDb = await this.discipline.findAll();

        return responseDb.map((group) => {
            return {
                id: group.dataValues.id,
                name: group.dataValues.name,
            };
        });
    }

    async getBooksOnDiciplines(id) {
        const responseDb = await this.dicipline_has_book.findAll({
            where: {
                disciplineId: id,
            },
            include: {
                model: this.book,
            },
        });

        return responseDb.map((d_b) => {
            const book = d_b.dataValues.book;
            return {
                id: book.id,
                title: book.title,
                creator: book.creator,
            };
        });
    }

    async markAsLearn(idBook, idUser) {
        const responseDb = await this.reader_has_book.findAll({
            where: {
                readerId: idUser,
                bookId: idBook,
            },
        });

        if (responseDb.length === 0) {
            await this.reader_has_book.create({
                statusRead: true,
                readerId: idUser,
                bookId: idBook,
            });
            return true;
        }

        if (!responseDb[0].dataValues.statusRead) {
            await this.reader_has_book.update(
                {
                    statusRead: true,
                },
                {
                    where: {
                        readerId: idUser,
                        bookId: idBook,
                    },
                }
            );
            return true;
        }

        return false;
    }

    async getBookWithDisipline(id, idUser) {
        console.log(id, idUser);
        const responseDb = await this.book.findOne({
            where: {
                id,
            },
            include: [
                {
                    model: this.dicipline_has_book,
                    include: {
                        model: this.discipline,
                    },
                },
            ],
        });

        const responseDbReaderHasBook = await this.reader_has_book.findOne({
            where: {
                bookId: id,
                readerId: idUser,
            },
        });

        return new BookHasDisiplineDTO({
            ...mapperToBookHasDisipline(responseDb, responseDbReaderHasBook),
        });
    }
}

module.exports = Repository;
