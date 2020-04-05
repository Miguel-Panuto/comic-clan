import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import { Back, Container } from './styles';
import { Line } from '../../global-styles'
import Header from '../../components/Header';
import BookContent from './components/BookContent';
import RandomBooks from './components/RandomBooks';

// Assets
import backIcon from '../../assets/icons/back-arrow.svg';

export default function BookPage(props) {
  const [book, setBook] = useState({});
  const history = useHistory();
  useEffect(() => {
    // This will identify with have a state on the navigation
    if (!props.history.location.state) {
      // if there ins't, will return to the front-page
      return history.push('/');
    } else {
      // if not, will set the book to parse him
      setBook(props.history.location.state.book)
    }
  }, [history, props.history.location.state])

  return (
    <>
      <Header />
      <Container>
        <Back>
          <Link to="/">
            <img src={backIcon} alt="Back icon" />
            <span>Back to collection</span>
          </Link>
        </Back>
        <BookContent book={book} />
        <Line />
        <RandomBooks />
      </Container>
    </>
  );
}
