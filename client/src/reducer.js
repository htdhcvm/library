import { combineReducers } from 'redux';

import libraryReducer from './features/libraryReducer';

const rootReducer = combineReducers({
    library: libraryReducer,
});

export default rootReducer;
