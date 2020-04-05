import React from 'react';

// Componnents
import Header from '../../components/Header';
import Search from './components/SearchBar';
import BookContainer from './components/BookContainer';
import SearchBooks from './components/SearchForBooks';

/** 
 * The main page is just a group of 3 major components
*/
export default function MainPage(props) {
    return (
        <>
            <Header />
            <Search />
            {props.match.path !== '/search' ?
                /** 
                 * The '/search', means that user is searching for something
                 * , and changes the component 
                */
                <BookContainer /> :
                <SearchBooks url={props.location.search} />
            }
        </>
    );
}

