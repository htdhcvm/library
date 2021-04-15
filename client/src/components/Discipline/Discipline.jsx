import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { requestGetBooksOnDisciplines } from '@features/libraryReducer';
import './Discipline.scss';

import Header from '../Header/Header';
import { Link } from 'react-router-dom';

const Discipline = () => {
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(requestGetBooksOnDisciplines(id));
    }, []);

    const listBookWithDisciplines = useSelector(
        (state) => state.library.listBookWithDisciplines
    );

    return (
        <div className="Discipline">
            <Header />
            <div className="list">
                {listBookWithDisciplines.map((book) => (
                    <Link
                        key={uuidv4()}
                        className="itemBook"
                        to={`/book/${book.id}`}
                    >
                        <span>
                            <b>Заголовок: {book.title}</b>
                        </span>
                        <br />
                        <span>Автор: {book.creator}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Discipline;
