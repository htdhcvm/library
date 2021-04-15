import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { useSelector, useDispatch } from 'react-redux';
import {
    requestGetAllGroups,
    requestRegistration,
} from '@features/libraryReducer';

import { Link } from 'react-router-dom';
import './Registration.scss';

const Registration = () => {
    const dispatch = useDispatch();

    const [selectGroup, setSelectGroup] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [retPassword, setRetPassword] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        dispatch(requestGetAllGroups);
    }, []);

    const handleRegistration = (e) => {
        e.preventDefault();
        if (
            (password.trim().length > 0) &
            (retPassword.trim().length > 0) &
            (password.trim() === retPassword.trim()) &
            (login.trim().length > 0) &
            (name.trim().length > 0) &
            (selectGroup.trim().length > 0)
        ) {
            dispatch(requestRegistration(login, password, selectGroup, name));
        }
    };

    const groupList = useSelector((state) => state.library.groups);

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
                    <FormControl variant="outlined">
                        <InputLabel id="demo-simple-select-outlined-label">
                            Группа
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={selectGroup}
                            onChange={(e) => setSelectGroup(e.target.value)}
                            label="Age"
                        >
                            {groupList.map((group) => (
                                <MenuItem key={uuidv4()} value={group}>
                                    {group}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="form-group">
                    <TextField
                        label="ФИО"
                        variant="outlined"
                        type="type"
                        onChange={(e) => setName(e.target.value)}
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
