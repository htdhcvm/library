import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { requestGetBook, requestMarkLearn } from '@features/libraryReducer';

import Header from '../Header/Header';

import './BookPage.scss';

const BookPage = () => {
    const dispatch = useDispatch();
    let { id } = useParams();

    useEffect(() => {
        dispatch(requestGetBook(id));
    }, []);

    const dataBook = useSelector((state) => state.library.book);
    const learn = useSelector((state) => state.library.book.learn);

    const handleLearn = () => {
        dispatch(requestMarkLearn(id));
    };

    console.log();
    return (
        <div className="BookPage">
            <Header />

            <div className="header">
                <h1>{dataBook.title}</h1>
                {!learn ? (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLearn}
                    >
                        Изучать
                    </Button>
                ) : null}
            </div>
            <TableContainer component={Paper} className="table">
                <Table aria-label="caption table">
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">Тип</TableCell>
                            <TableCell align="right">{dataBook.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Обложка</TableCell>
                            <TableCell align="right">
                                {dataBook.typeCover}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Теги</TableCell>
                            <TableCell align="right">
                                {dataBook.subject}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Издательство</TableCell>
                            <TableCell align="right">
                                {dataBook.publisher}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                Название дисциплины
                            </TableCell>
                            <TableCell align="right">
                                {dataBook.nameDisipline}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">ISBN</TableCell>
                            <TableCell align="right">
                                {dataBook.identifier}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Язык</TableCell>
                            <TableCell align="right">
                                {dataBook.language}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Формат</TableCell>
                            <TableCell align="right">
                                {dataBook.format}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Дата</TableCell>
                            <TableCell align="right">{dataBook.date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Автор</TableCell>
                            <TableCell align="right">
                                {dataBook.creator}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                Распространена в
                            </TableCell>
                            <TableCell align="right">
                                {dataBook.coverage}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">Контрибьютер</TableCell>
                            <TableCell align="right">
                                {dataBook.contributor}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                Количество страниц
                            </TableCell>
                            <TableCell align="right">
                                {dataBook.countPages}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="right">
                                Количество экземпляров
                            </TableCell>
                            <TableCell align="right">
                                {dataBook.coutInstance}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <span className="description">{dataBook.description}</span>
        </div>
    );
};

export default BookPage;
