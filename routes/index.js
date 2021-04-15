const router = require('express').Router();
const checkOnAccess = require('../middleware/checkOnAccess');

const {
    book,
    dicipline_has_book,
    discipline,
    group,
    reader,
    reader_has_discipline,
    reader_has_book,
} = require('../models/bootstrap')();

const Controller = require('../controllers/');
const Service = require('../services/');
const Repository = require('../repositories/');

const repository = new Repository(
    book,
    dicipline_has_book,
    discipline,
    group,
    reader,
    reader_has_discipline,
    reader_has_book
);
const service = new Service(repository);
const controller = new Controller(service);

router.get('/login/:password/:login', controller.login.bind(controller));

router.post('/registration', controller.registration.bind(controller));
router.get('/logout', checkOnAccess, controller.logout.bind(controller));
router.get(
    '/search/:searchWord',
    checkOnAccess,
    controller.search.bind(controller)
);
router.get(
    '/getAllBooks',
    checkOnAccess,
    controller.getAllBooks.bind(controller)
);
router.get('/getBook/:id', checkOnAccess, controller.getBook.bind(controller));
router.get('/calculate', controller.calculate.bind(controller));
router.put('/markLearn', checkOnAccess, controller.markLearn.bind(controller));

router.get('/getAllGroups', controller.getAllGroups.bind(controller));
router.get('/getAllDiciplines', controller.getAllDiciplines.bind(controller));
router.get(
    '/getBooksOnDiciplines/:id',
    controller.getBooksOnDiciplines.bind(controller)
);
module.exports = router;
