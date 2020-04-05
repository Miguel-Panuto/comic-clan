import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function BookCard({ book }) {
    // Function to put '...' when the string is too long
    const truncateString = (str, strMaxLength, whereCut) => {
        if (str.length >= strMaxLength)
            return str.substring(0, whereCut) + '...';
        return str;
    }
    return (
        <Link to={{ pathname: '/book', state: { book } }} key={book.name}> {/* Path to book page */}
            <Container>
                <img src={book.image} alt={book.name} /> 
                <h3>{truncateString(book.name, 17, 14)}</h3>
                <span>Owned By <strong>{truncateString(book.owner, 15, 13)}</strong></span>
            </Container>
        </Link>

    );
}
