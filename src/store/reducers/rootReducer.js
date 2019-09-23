import {combineReducers} from 'redux';
import addBookReducer from './addBook_redcuer';

const rootReducers = 
        combineReducers(
            {
                Books: addBookReducer,
            }
        )

export default rootReducers;