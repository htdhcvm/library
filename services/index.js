const comparePasswords = require('../helpers/checkPassword');

class Service {
    constructor(repository) {
        this.repository = repository;
    }

    async checkOnExistUser(login) {
        return await this.repository.checkOnExistUser(login);
    }

    async getIdGroupOnName(group) {
        return await this.repository.getIdGroupOnName(group);
    }

    async createNewUser(login, password, idGroup, name) {
        return await this.repository.createNewUser(
            login,
            password,
            idGroup,
            name
        );
    }

    async getPassword(login) {
        return await this.repository.getPassword(login);
    }

    async checkPassword(password, passwordFromDb) {
        return await comparePasswords(password, passwordFromDb);
    }

    async getIdUserOnLogin(login) {
        return await this.repository.getIdUserOnLogin(login);
    }
    async search(searchWord) {
        return await this.repository.search(searchWord);
    }

    async getAllBooksWithDispipiline() {
        return await this.repository.getAllBooksWithDispipiline();
    }
    async getBookWithDisipline(id) {
        return await this.repository.getBookWithDisipline(id);
    }
    async markAsLearn(idBook) {
        return await this.repository.markAsLearn(idBook);
    }
}

module.exports = Service;
