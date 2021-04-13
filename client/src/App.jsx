import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import BookPage from './components/BookPage/BookPage';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration';
import SignIn from './components/SignIn/SignIn';
import Discipline from './components/Discipline/Discipline';
import NotMatch from './components/NotMatch/NotMatch';
import CheckOnAccess from './components/CheckOnAccess/CheckOnAccess';

const App = () => {
    return (
        <Router>
            <Switch>
                <CheckOnAccess path="/book/:id" exact>
                    <BookPage />
                </CheckOnAccess>
                <CheckOnAccess path="/discipline/:id" exact>
                    <Discipline />
                </CheckOnAccess>
                <CheckOnAccess path="/home" exact>
                    <Main />
                </CheckOnAccess>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/" exact>
                    <SignIn />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
