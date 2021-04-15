import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import ListDisciplines from '../ListDisciplines/ListDisciplines';
import ListBook from '../ListBook/ListBook';
import './Main.scss';

const Main = () => {
    return (
        <div className="Main">
            <Header />
            <ListDisciplines />
            <ListBook />
        </div>
    );
};

export default Main;
