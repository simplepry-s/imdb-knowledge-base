import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
};

Header.propTypes = {};

export default Header;
