import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BookShelf, Books } from '../../../../global-styles';

// Components
import BookCard from '../../../../components/BookCard'

// Utils
import generateNumbers from '../../../../utils/GenerateNumbers';

const RandomBooks = ({ books }) => {
    const [randomNumbers, setRandomNumber] = useState([]);
    useEffect(() => {
        if(books) {
            // Generate a array of 10 random numbers inside the books array length
            setRandomNumber(generateNumbers(books.length, 10));
        }
    }, [books])

    return (
        <Books>
            <h2>Other Random Books</h2>
            <BookShelf>
                {randomNumbers.map(num => {
                    if (books[num])
                        return <BookCard book={books[num]} key={num}/>
                    return null;
                }
                )}
            </BookShelf>
        </Books>
    );
}

const mapStateToProps = state => ({
  books: state.books.books
});

export default connect(mapStateToProps)(RandomBooks);