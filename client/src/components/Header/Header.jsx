import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

import { useSelector, useDispatch } from 'react-redux';
import { requestLogout, requestSearch } from '@features/libraryReducer';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState('');

    const login = useSelector((state) => state.library.login);

    const handleLogout = () => {
        dispatch(requestLogout);
    };

    const handleSearch = () => {
        if (searchInput.trim().length > 0) dispatch(requestSearch(searchInput));
    };

    return (
        <div className="Header">
            <Link to="/home" className="homelink">
                <HomeIcon />
            </Link>
            <Paper elevation={3} className="search-box">
                <InputBase
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'naked' }}
                />
                <SearchIcon className="searchIcon" onClick={handleSearch} />
            </Paper>
            <span className="login">{login}</span>
            <span className="logout" onClick={handleLogout}>
                Выйти
            </span>
        </div>
    );
};

export default Header;
