import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, PageNotFound } from "../pages";

const myRouters = props => {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default myRouters;
