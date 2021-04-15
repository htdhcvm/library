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
    async getBookWithDisipline(id, idUser) {
        return await this.repository.getBookWithDisipline(id, idUser);
    }
    async markAsLearn(idBook, idUser) {
        return await this.repository.markAsLearn(idBook, idUser);
    }
    async getAllGroups() {
        return await this.repository.getAllGroups();
    }
    async getAllDiciplines() {
        return await this.repository.getAllDiciplines();
    }

    async getBooksOnDiciplines(id) {
        return await this.repository.getBooksOnDiciplines(id);
    }
}

module.exports = Service;
