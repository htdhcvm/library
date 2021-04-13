import { createServer, Model, hasMany, belongsTo } from 'miragejs';
import books from './books';

createServer({
    models: {
        reader: Model.extend({
            reader_has_discipline: hasMany(),
        }),
        discipline: Model.extend({
            reader_has_discipline: hasMany(),
            discipline_has_book: hasMany(),
        }),
        book: Model.extend({
            discipline_has_book: hasMany(),
        }),
        discipline_has_book: Model.extend({
            discipline: belongsTo(),
            book: belongsTo(),
        }),
        reader_has_discipline: Model.extend({
            reader: belongsTo(),
            discipline: belongsTo(),
        }),
    },

    seeds(server) {
        books.forEach((book) => {
            server.create('book', {
                id: book.id,
                title: book.title,
                creator: book.creator,
                subject: book.subject,
                description: book.description,
                publisher: book.publisher,
                contributor: book.contributor,
                typeCover: book.typeCover,
                date: book.date,
                type: book.type,
                format: book.format,
                countPages: book.countPages,
                identifier: book.identifier,
                language: book.language,
                coverage: book.coverage,
            });
        });
    },

    routes() {
        this.get('/api/test', (schema) => {
            return schema.books.all();
        });
    },
});
