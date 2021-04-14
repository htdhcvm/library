import React, { useState } from 'react';

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Registration.scss';

const Registration = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [retPassword, setRetPassword] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        if (
            (password.trim().length > 0) &
            (retPassword.trim().length > 0) &
            (password.trim() === retPassword.trim()) &
            (login.trim().length > 0)
        ) {
            console.log(login, password, retPassword);
        }
    };

    return (
        <div className="Registration">
            <Avatar className="lock-wrapper">
                <AccessibilityNewIcon />
            </Avatar>
            <h1>Регистрация</h1>
            <form onSubmit={handleRegistration}>
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
                <div className="form-group">
                    <TextField
                        label="Повторите пароль"
                        variant="outlined"
                        type="password"
                        onChange={(e) => setRetPassword(e.target.value)}
                    />
                </div>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Зарегистрироваться
                </Button>
            </form>
            <div className="footer">
                <Link to="/">Авторизация</Link>
            </div>
        </div>
    );
};

export default Registration;
