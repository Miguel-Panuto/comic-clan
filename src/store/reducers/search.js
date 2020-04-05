import { CHANGE_SEARCH } from '../actions/search';

// Switch the type of search: 'year', 'writer', 'artist', 'owner' or 'random'
// All the searchs will change the form of view
// The random is most diferent, will return 10 random numbers based on books quantity
export default function searchReducer(state = { type: 'year' }, { type, payload }) {
    switch(type) {
        case CHANGE_SEARCH:
            return payload;
        default:
            return state;
    }
}