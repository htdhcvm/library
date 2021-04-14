const getHash = require('../helpers/getHash');

class Controller {
    constructor(service) {
        this.service = service;
    }

    async login(req, res) {
        try {
            const { login, password } = req.body;

            const exist = await this.service.checkOnExistUser(login);

            if (!exist) return res.sendStatus(400);

            const passwordFromDb = await this.service.getPassword(login);

            const correct = await this.service.checkPassword(
                password,
                passwordFromDb
            );

            if (!correct) return res.sendStatus(400);

            const idUser = await this.service.getIdUserOnLogin(login);

            req.session.userId = idUser;

            return res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async logout(req, res) {
        try {
            req.session.destroy((err) => {
                if (err) {
                    return res.sendStatus(500);
                }
                req.session = null;
                return res.sendStatus(200);
            });
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async registration(req, res) {
        try {
            const { login, password, group, name } = req.body;

            // проверка на существование если существует то nope
            const exist = await this.service.checkOnExistUser(login);

            if (exist) {
                return res.sendStatus(400);
            }

            // получить id группы
            const idGroup = await this.service.getIdGroupOnName(group);

            if (!idGroup) return res.sendStatus(400);

            // добавляем пользователя
            const id = await this.service.createNewUser(
                login,
                await getHash(password),
                idGroup,
                name
            );

            console.log(id);
            if (id) {
                req.session.userId = id;
                return res.sendStatus(200);
            }

            return res.sendStatus(400);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async search(req, res) {
        try {
            const { searchWord } = req.params;

            const searchResult = await this.service.search(searchWord);

            res.json(searchResult);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getAllBooks(req, res) {
        try {
            const result = await this.service.getAllBooksWithDispipiline();

            return res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async getBook(req, res) {
        try {
            const { id } = req.params;

            const bookWithDisipline = await this.service.getBookWithDisipline(
                id
            );

            console.log(bookWithDisipline);

            res.json(bookWithDisipline);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

    async markLearn(req, res) {
        try {
            const { idBook } = req.body;

            const resultMarkLearn = await this.service.markAsLearn(idBook);

            if (resultMarkLearn) return res.sendStatus(200);
            return res.sendStatus(400);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }
}

module.exports = Controller;
