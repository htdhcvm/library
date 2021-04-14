class BookHasDisipline {
    constructor({
        id,
        title,
        creator,
        subject,
        description,
        publisher,
        contributor,
        typeCover,
        date,
        type,
        format,
        countPages,
        identifier,
        language,
        coverage,
        coutInstance,
        nameDisipline,
    }) {
        this.id = id;
        this.title = title;
        this.creator = creator;
        this.subject = subject;
        this.description = description;
        this.publisher = publisher;
        this.contributor = contributor;
        this.typeCover = typeCover;
        this.date = date;
        this.type = type;
        this.format = format;
        this.countPages = countPages;
        this.identifier = identifier;
        this.language = language;
        this.coverage = coverage;
        this.coutInstance = coutInstance;
        this.nameDisipline = nameDisipline;
    }
}

module.exports = BookHasDisipline;
