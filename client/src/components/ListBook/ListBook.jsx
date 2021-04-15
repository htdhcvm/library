import React, { useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetAllBooks } from '@features/libraryReducer';
import { Link } from 'react-router-dom';

import './ListBook.scss';

const ListBook = () => {
    const dispatch = useDispatch();
    const listBookWithDisciplines = useSelector(
        (state) => state.library.listBookWithDisciplines
    );

    useEffect(() => {
        dispatch(requestGetAllBooks);
    }, []);

    return (
        <>
            <h3>Список книг</h3>

            <div className="ListBook">
                {listBookWithDisciplines.map((bookDiscipline) => (
                    <Link
                        key={uuidv4()}
                        className="itemBook"
                        to={`/book/${bookDiscipline.id}`}
                    >
                        <span>
                            <b>Заголовок: {bookDiscipline.title}</b>
                        </span>
                        <br />

                        <span>Автор: {bookDiscipline.creator}</span>
                        <br />
                        <span>
                            Название дисциплины: {bookDiscipline.nameDisiplice}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ListBook;
