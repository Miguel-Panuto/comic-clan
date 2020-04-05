import React from 'react';

// Components
import { Container, Img, BookDetails } from './styles';

// Assets
import star from '../../../../assets/icons/star.png';
import starGolden from '../../../../assets/icons/star-golden.png';

export default function BookContent({ book }) {
  // Default rating icons (the unlit start)
  const ratingIcons = [star, star, star, star, star];

  return (
    <Container>
      <Img>
        <img src={book.image} alt="Book cover" />
      </Img>
      <BookDetails>
        <div className="display-name-rating">
          <h2>{book.name + ' (' + book.year + ')'}</h2>
          <div className="rating">
            {ratingIcons.map((icon, index) => {
              // That identifies if the icon will the unlit star or the golden star
              const iconToShow = book.rating <= index ? icon : starGolden;
              return (
                <img src={iconToShow} alt="Star icon rating" key={icon + index} />
              )
            })}
          </div>
        </div>
        <span>Writer: <strong>{book.writer}</strong></span>
        <span>Artist: <strong>{book.artist}</strong></span>
        <span>Publication: <strong>{book.publication}</strong></span>
        <span>Owner: <strong>{book.owner}</strong></span>
        <p>{book.summary}</p>
      </BookDetails>

    </Container>
  );
}
