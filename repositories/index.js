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
        reader_has_discipline
    ) {
        this.book = book;
        this.dicipline_has_book = dicipline_has_book;
        this.reader_has_discipline = reader_has_discipline;
        this.discipline = discipline;
        this.group = group;
        this.reader = reader;
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

    async getBookWithDisipline(id) {
        const responseDb = await this.book.findOne({
            where: {
                id,
            },
            include: {
                model: this.dicipline_has_book,
                include: {
                    model: this.discipline,
                },
            },
        });

        return new BookHasDisiplineDTO({
            ...mapperToBookHasDisipline(responseDb),
        });
    }

    async markAsLearn(idBook) {
        const responseDb = await this.dicipline_has_book.update(
            {
                statusRead: true,
            },
            {
                where: {
                    id: idBook,
                },
            }
        );

        if (responseDb[0] === 1) return true;
        return false;
    }
}

module.exports = Repository;
