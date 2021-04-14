module.exports = (dataFromDb) => {
    return {
        id: dataFromDb.dataValues.id,
        title: dataFromDb.dataValues.title,
        creator: dataFromDb.dataValues.creator,
        subject: dataFromDb.dataValues.subject,
        description: dataFromDb.dataValues.description,
        publisher: dataFromDb.dataValues.publisher,
        contributor: dataFromDb.dataValues.contributor,
        typeCover: dataFromDb.dataValues.typeCover,
        date: dataFromDb.dataValues.date,
        type: dataFromDb.dataValues.type,
        format: dataFromDb.dataValues.format,
        countPages: dataFromDb.dataValues.countPages,
        identifier: dataFromDb.dataValues.identifier,
        language: dataFromDb.dataValues.language,
        coverage: dataFromDb.dataValues.coverage,
        coutInstance: dataFromDb.dataValues.coutInstance,
        nameDisipline:
            dataFromDb.dataValues.dicipline_has_books[0].dataValues.discipline
                .name,
    };
};
