import React, { Component } from 'react';
import queryString from 'query-string';

// Components
import BookCard from '../../../../components/BookCard';
import { BookShelf, Books } from '../../../../global-styles';

// api
import api from '../../../../services/api';

export default class SearchBooks extends Component {
    // Initial state
    state = {
        books: [],
        searchValue: ''
    }
    // Search books on the api
    async loadBooks() {
        return api.get(`comics?q=${this.state.searchValue}`)
            .then(response => this.setState({ books: response.data }))
            .catch(e => console.log(e));
    }
    // Picks the search value the query param
    changeSearchValueHandler() {
        const { name } = queryString.parse(this.props.url);
        this.setState({ searchValue: name });
    }
    async componentDidMount() {
        this.changeSearchValueHandler();
        await this.loadBooks();
    }
    // Identify if the url or the search value changes
    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url || prevState.searchValue !== this.state.searchValue) {
            this.changeSearchValueHandler();
            await this.loadBooks();
        }
    }

    render() {
        return (
            <Books>
                <h2>Results for '{this.state.searchValue}'</h2>
                <BookShelf>
                    {this.state.books.map(book => (
                        <BookCard key={book.name} book={book} />
                    ))}
                </BookShelf>
            </Books>
        )
    }
}

