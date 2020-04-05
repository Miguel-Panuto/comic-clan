import { createStore, combineReducers } from 'redux';

// Reducers
import searchReducer from './reducers/search';
import booksReducer from './reducers/books'; 

// Group reducers
const reducers = combineReducers({
    search: searchReducer,
    books: booksReducer
});

const store = createStore(reducers);

export default store;