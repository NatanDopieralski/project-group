import React from 'react';
import PropTypes from 'prop-types';
import styles from './RatingStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const setColor = (hoverRating, value, rating, stars, userRating) => {
  if (hoverRating >= value) {
    return '#d58e32';
  } else if (userRating === value) {
    return '#2a2a2a';
  } else if (!hoverRating && rating >= value) {
    return '#d58e32';
  } else if (!hoverRating && !rating && stars >= value) {
    return '#000';
  }
  return '#d58e32';
};

const RatingStars = ({ id, stars, userRating, addRating }) => {
  const [hoverRating, setHoverRating] = React.useState(0);
  const allStars = [1, 2, 3, 4, 5];

  return (
    <div>
      {allStars.map(star => (
        <label key={star} className={styles.starRate}>
          <input type='radio' name='rating' value={stars} />
          <FontAwesomeIcon
            icon={star <= (userRating || hoverRating || stars) ? faStar : farStar}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={event => {
              event.preventDefault();
              return addRating(star, id);
            }}
            style={{ color: setColor(hoverRating, userRating, star, stars) }}
          />
        </label>
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  stars: PropTypes.number,
  id: PropTypes.string,
  value: PropTypes.number,
  userRating: PropTypes.number,
  addRating: PropTypes.func,
};

export default RatingStars;
