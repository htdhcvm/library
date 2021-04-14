import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './App';

import '../mock/server';

// import store from './store';

ReactDOM.render(
    // <Provider store={store}>
    <App />,
    // </Provider>,
    document.getElementById('root')
);

// import axios from 'axios';

// const axiosInstanceVisitor = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 3000,
// });

// axiosInstanceVisitor
//     .get('/api/test')
//     .then((r) => r.data)
//     .then((data) => console.log(data));
