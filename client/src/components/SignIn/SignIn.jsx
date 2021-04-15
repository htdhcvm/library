import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useDispatch } from 'react-redux';
import { requestLogin } from '@features/libraryReducer';

import './SignIn.scss';

const SignIn = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        if ((login.trim().length > 0) & (password.trim().length > 0)) {
            dispatch(requestLogin(login, password));
        }
    };
    return (
        <div className="SignIn">
            <Avatar className="lock-wrapper">
                <MeetingRoomIcon />
            </Avatar>
            <h1>Вход</h1>
            <form onSubmit={handleSignIn}>
                <div className="form-group">
                    <TextField
                        label="Логин"
                        variant="outlined"
                        type="text"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <TextField
                        label="Пароль"
                        variant="outlined"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Войти
                </Button>
            </form>
            <div className="footer">
                <Link to="/registration">Регистрация</Link>
            </div>
        </div>
    );
};

export default SignIn;
