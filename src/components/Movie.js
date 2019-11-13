import React from "react";
import PropTypes from "prop-types";

const default_image =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = props => {
  const { movie } = props;
  const poster = movie.Poster === "N/A" ? default_image : movie.Poster;

  return (
    <div className="movie">
      <div className="movie-title">
        <h4>{movie.Title}</h4>
      </div>

      <div>
        <img width="200px" alt={`${movie.title}`} src={poster}></img>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
  })
};

export default Movie;
