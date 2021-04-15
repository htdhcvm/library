import { baseAxios, axiosWithCredentials } from '@axios';

const logout = () => {
    return { type: 'library/logout' };
};
const getAllBooks = (listBooks) => {
    return { type: 'library/getAllBooks', payload: listBooks };
};
const getAllGroups = (groups) => {
    return { type: 'library/getAllGroups', payload: groups };
};
const getAllDisciplines = (list) => {
    return { type: 'library/getAllDisciplines', payload: list };
};
const loginAction = (login) => {
    return { type: 'library/loginAction', payload: login };
};

const registration = (login) => {
    return { type: 'library/registration', payload: login };
};

const search = (listBook) => {
    return { type: 'library/search', payload: listBook };
};

const getBook = (bookData) => {
    return { type: 'library/getBook', payload: bookData };
};

const markLearn = () => {
    return { type: 'library/markLearn' };
};

const getBooksOnDisciplines = (list) => {
    return { type: 'library/getBooksOnDisciplines', payload: list };
};

const caculate = (calcData) => {
    return { type: 'library/caculate', payload: calcData };
};
const initialState = {
    isAuth: false,
    login: '',
    listBookWithDisciplines: [],
    groups: [],
    listDisciplines: [],
    book: {
        learn: true,
    },
    dataCalc: [],
};

export default function libraryReducer(state = initialState, action) {
    switch (action.type) {
        case 'library/caculate': {
            return {
                ...state,
                dataCalc: [...action.payload],
            };
        }
        case 'library/logout': {
            return {
                ...state,
                isAuth: false,
                login: '',
                listBookWithDisciplines: [],
            };
        }
        case 'library/getAllBooks': {
            return {
                ...state,
                listBookWithDisciplines: [...action.payload],
            };
        }
        case 'library/getAllGroups': {
            return {
                ...state,
                groups: [...action.payload],
            };
        }
        case 'library/getAllDisciplines': {
            return {
                ...state,
                listDisciplines: [...action.payload],
            };
        }
        case 'library/loginAction': {
            return {
                ...state,
                login: action.payload,
                isAuth: true,
            };
        }
        case 'library/registration': {
            return {
                ...state,
                login: action.payload,
                isAuth: true,
            };
        }
        case 'library/search': {
            return {
                ...state,
                listBookWithDisciplines: [...action.payload],
            };
        }
        case 'library/getBook': {
            return {
                ...state,
                book: { ...action.payload },
            };
        }
        case 'library/markLearn': {
            return {
                ...state,
                book: {
                    ...state.book,
                    learn: true,
                },
            };
        }
        case 'library/getBooksOnDisciplines': {
            return {
                ...state,
                listBookWithDisciplines: action.payload,
            };
        }
        default:
            return state;
    }
}

export async function requestLogout(dispatch, useState) {
    const responseServer = await axiosWithCredentials.get(`/api/logout`);

    if (responseServer.status === 200) dispatch(logout());
}

export async function requestGetAllBooks(dispatch, useState) {
    const responseServer = await axiosWithCredentials.get(`/api/getAllBooks`);

    if (responseServer.status === 200)
        dispatch(getAllBooks(responseServer.data.collectionDTOSearch));
}

export async function requestGetAllGroups(dispatch, useState) {
    const responseServer = await baseAxios.get('/api/getAllGroups');

    if (responseServer.status === 200)
        dispatch(getAllGroups(responseServer.data));
}

export async function requestGetAllDisciplines(dispatch, useState) {
    const responseServer = await axiosWithCredentials.get(
        `/api/getAllDiciplines`
    );

    if (responseServer.status === 200)
        dispatch(getAllDisciplines(responseServer.data));
}

export function requestLogin(login, password) {
    return async function requestLoginThunk(dispatch, useState) {
        const responseServer = await axiosWithCredentials.get(
            `/api/login/${password}/${login}`
        );

        if (responseServer.status === 200) dispatch(loginAction(login));
    };
}

export function requestRegistration(login, password, group, name) {
    return async function requestRegistrationThunk(dispatch, useState) {
        const responseServer = await axiosWithCredentials.post(
            '/api/registration',
            {
                login,
                password,
                group,
                name,
            }
        );

        if (responseServer.status === 200) dispatch(registration(login));
    };
}

export function requestSearch(searchWord) {
    return async function requestSearchThunk(dispatch, useState) {
        const responseServer = await axiosWithCredentials.get(
            `/api/search/${searchWord}`
        );

        if (responseServer.status === 200)
            dispatch(search(responseServer.data.collectionDTOSearch));
    };
}

export function requestGetBooksOnDisciplines(dicsipline) {
    return async function requestGetBooksOnDisciplinesThunk(
        dispatch,
        useState
    ) {
        const responseServer = await axiosWithCredentials.get(
            `/api/getBooksOnDiciplines/${dicsipline}`
        );

        if (responseServer.status === 200)
            dispatch(getBooksOnDisciplines(responseServer.data));
    };
}

export function requestGetBook(idBook) {
    return async function requestGetBookThunk(dispatch, useState) {
        const responseServer = await axiosWithCredentials.get(
            `/api/getBook/${idBook}`
        );

        if (responseServer.status === 200)
            dispatch(getBook(responseServer.data));
    };
}

export function requestMarkLearn(idBook) {
    return async function requestMarkLearnThunk(dispatch, useState) {
        const responseServer = await axiosWithCredentials
            .put(`/api/markLearn`, {
                idBook,
            })
            .catch((e) => {
                console.log(e);
            });

        if (responseServer.status === 200) dispatch(markLearn());
    };
}

export async function requestCalculate(dispatch, useState) {
    const responseServer = await axiosWithCredentials.get(`/api/calculate`);

    console.log(responseServer);
    if (responseServer.status === 200) dispatch(caculate(responseServer.data));
}
