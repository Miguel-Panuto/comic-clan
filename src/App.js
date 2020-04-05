import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setBooks } from './store/actions/books';

import GlobalStyle from './global-styles';

import api from './services/api';

import Routes from './routes';

class App extends Component {

  async loadBooks() {
    return api.get('comics')
      .then(response => this.props.setBooksState(response.data))
      .catch(e => console.log(e));
  }

  async componentDidMount() {
    await this.loadBooks();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Routes />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBooksState: (books) => dispatch(setBooks(books))
  }
}
export default connect(null, mapDispatchToProps)(App);
