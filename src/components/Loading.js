import React from "react";
import ReactLoading from "react-loading";
import PropTypes from "prop-types";

const Loading = props => {
  const { type, color, height, width } = props;
  return (
    <div>
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
};

Loading.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default Loading;
