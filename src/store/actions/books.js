export const SET_BOOKS = 'SET_BOOKS';

// Action to set the books
export const setBooks = books => {
    return {
        type: SET_BOOKS,
        payload: {
            books: books
        }
    }
}