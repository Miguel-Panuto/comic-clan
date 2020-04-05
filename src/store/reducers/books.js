import { SET_BOOKS } from '../actions/books';

// Pick books from api
export default function booksReducer(state = [], { type, payload }) {
    switch(type) {
        case SET_BOOKS:
            return payload;
        default:
            return state;
    }
}