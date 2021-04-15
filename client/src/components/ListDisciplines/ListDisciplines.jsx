import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Paper from '@material-ui/core/Paper';

import { useSelector, useDispatch } from 'react-redux';
import { requestGetAllDisciplines } from '@features/libraryReducer';

import './ListDisciplines.scss';
import { Link } from 'react-router-dom';

const ListDisciplines = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestGetAllDisciplines);
    }, []);

    const listDisciplines = useSelector(
        (state) => state.library.listDisciplines
    );

    return (
        <>
            <h3>Список дисциплин</h3>
            <div className="ListDisciplines">
                {listDisciplines.map((discipline) => (
                    <Link key={uuidv4()} to={`/discipline/${discipline.id}`}>
                        <Paper className="item" elevation={2}>
                            {discipline.name}
                        </Paper>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ListDisciplines;
