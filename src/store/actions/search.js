export const CHANGE_SEARCH = 'CHANGE_SEARCH';

// Action to change the search
export const changeSearch = (type) => {
    return {
        type: CHANGE_SEARCH,
        payload: {
            type
        }
    }
}