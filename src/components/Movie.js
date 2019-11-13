import React from "react";
import PropTypes from "prop-types";
import animations from "../config/animations/config";
import { createRenderer } from "fela";
import { createComponent, Provider } from "react-fela";

import {
  bounceIn,
  bounceOutRight,
  fadeIn,
  fadeOutLeftBig,
  flip,
  jello,
  shake,
  zoomInUp,
  wobble,
  zoomOutDown,
  swing
} from "react-animations";

const animate = [
  bounceIn,
  bounceOutRight,
  fadeIn,
  fadeOutLeftBig,
  flip,
  jello,
  shake,
  zoomInUp,
  wobble,
  zoomOutDown,
  swing
];

const rand = items => {
  return items[Math.floor(Math.random() * items.length)];
};

console.log("hey", rand(animate));

const mapStylesToProps = ({ background, height, width }, renderer) => ({
  animationName: renderer.renderKeyframe(() => rand(animate), {}),
  animationDuration: "2s",
  background,
  height,
  width
});

const BouncingDiv = createComponent(mapStylesToProps, "div");

const default_image =
  "http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";

const Movie = props => {
  const { movie } = props;

  const nonPosterStyle = {
    border: "1px solid green"
  };

  const defaultStyle = {};
  const style = movie.Poster === "N/A" ? nonPosterStyle : defaultStyle;
  const poster = movie.Poster === "N/A" ? default_image : movie.Poster;

  return (
    <Provider renderer={createRenderer()}>
      <BouncingDiv>
        <div className="movie">
          {/* <p style={{ fontSize: "13px" ,width:'100%'}}>
            {movie.Title}
          </p> */}

          <div>
            <img
              style={style}
              width="200px"
              alt={`${movie.title}`}
              src={poster}
            ></img>
          </div>
        </div>
      </BouncingDiv>
    </Provider>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired
  })
};

export default Movie;
