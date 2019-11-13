import React from "react";
import PropTypes from "prop-types";
import "./styles/index.scss";
import { Search } from "./components";
import { Home, Welcome } from "./pages";
import { Route } from "react-router-dom";

const App = props => {
  return (
    <div>
      <Route path="/" exact component={Welcome}  />
      <Route path="/movies" exact component={Home} />
      <Route path="*" exact component={Welcome} /> 

    </div>
  );
};

App.propTypes = {};

export default App;
