import React from "react";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types"

const Rating = props => {
  const { star } = props;
  return (
    <div>
      <StarRatings
        rating={star.rating}
        starRatedColor={star.color}
        // changeRating={changeRating}
        numberOfStars={star.number}
        name="rating"
        starDimension="20px"
        starSpacing="5px"
      />
    </div>
  );
};

Rating.propTypes = {
    star : PropTypes.shape({
        rating : PropTypes.number.isRequired,
        color:PropTypes.string.isRequired,
        number:PropTypes.number.isRequired
    })
}

export default Rating;
