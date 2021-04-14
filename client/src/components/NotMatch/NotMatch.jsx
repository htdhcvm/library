import React from 'react';

import Typography from '@material-ui/core/Typography';
import KeyboardTabIcon from '@material-ui/icons/KeyboardTab';

import './NotMatch.scss';

import bg from '@assets/404.gif';
import { Link } from 'react-router-dom';

const NotMatch = () => {
    return (
        <div className="NotMatch">
            <img src={bg} alt="404"></img>
            <Link to="/">
                <Typography className="header" variant="h4">
                    На главную страницу{' '}
                    <KeyboardTabIcon className="icon-arrow" />
                </Typography>
            </Link>
        </div>
    );
};

export default NotMatch;
