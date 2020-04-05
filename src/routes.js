import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';

// Auxiliar component initialize a page on top
import ScrollToTop from './components/SrollToTop';

export default function src() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route path="/book" component={BookPage} />
          <Route path="/search" component={MainPage} />
          <Route path="/" component={MainPage} /> {/**This route is the root if isn't /book or /search will go there*/}
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}
