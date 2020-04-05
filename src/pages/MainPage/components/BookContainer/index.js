import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import { Books, BookShelf } from '../../../../global-styles';
import { Line } from '../../../../global-styles';

// Components
import TypeSearch from '../TypeSearch';
import BookCard from '../../../../components/BookCard';

// Utils
import { ascendingOrder, descendingOrder, uniqueArr } from '../../../../utils/ArrayUtils';
import generateNumbers from '../../../../utils/GenerateNumbers';

class BookContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedArray: [],
        }
    }
    // Reset the array to sort according to the type search
    componentDidMount() {
        if (this.props.books)
            this.whatTypeOfSearch();
    }
    // Identify if the type search or the books have been updated
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.typeSearch !== this.props.typeSearch || prevProps.books !== this.props.books) {
            this.whatTypeOfSearch();
        }
    }
    // This will make a sorted array, unique years, artists, writers and owners, no repeat
    whatTypeOfSearch() {
        if (this.props.typeSearch === 'year') // The unique difference is on the year, that is sorted in descending order
            return this.setState(({
                sortedArray: uniqueArr(this.props.books.map(book => book.year) 
                    .sort(descendingOrder))
            }));
        else if (this.props.typeSearch === 'writer')
            return this.setState(({
                sortedArray: uniqueArr(this.props.books.map(book => book.writer)
                    .sort(ascendingOrder))
            }));
        else if (this.props.typeSearch === 'artist')
            return this.setState(({
                sortedArray: uniqueArr(this.props.books.map(book => book.artist)
                    .sort(ascendingOrder))
            }))
        else if (this.props.typeSearch === 'owner')
            return this.setState(({
                sortedArray: uniqueArr(this.props.books.map(book => book.owner)
                    .sort(ascendingOrder))
            }))
        else
            return this.setState({ sortedArray: generateNumbers(this.props.books.length, 20) });
    }

    render() {
        //  Function to render the books according the type that is sorted
        const BooksGroup = () => {
            if (this.props.typeSearch !== 'random')
                return (
                    // The type is the year, the artist, writer or owner name
                    this.state.sortedArray.map(type => (
                        <div key={type}>
                            <h2>{type}</h2>
                            <BookShelf>
                                {this.props.books.map(book => {
                                    // This identify if there is somewhere
                                    if ((book.year === type) |
                                        (book.writer === type) |
                                        (book.artist === type) |
                                        (book.owner === type)) {
                                        return <BookCard book={book} key={book.name} />
                                    }
                                    return null
                                })}
                            </BookShelf>
                            <Line />
                        </div>
                    ))
                );
            else if (this.props.typeSearch === 'random') {
                return (
                    <div>
                        <h2>Random Books</h2>
                        <BookShelf>
                            {this.state.sortedArray.map(num => {
                                if (this.props.books[num])
                                    return <BookCard
                                        key={num}
                                        book={this.props.books[num]}
                                    />
                                return null;
                            })}
                        </BookShelf>
                    </div>
                )
            }
        }
        return (
            <div>
                <TypeSearch />
                <Books>
                    <BooksGroup />
                </Books>
            </div>
        );
    }
}

/**
 * Redux states
 * typeSearch is the method that is selected
 */
const mapStateToProps = state => ({
    typeSearch: state.search.type,
    books: state.books.books
});

export default connect(mapStateToProps)(BookContainer);