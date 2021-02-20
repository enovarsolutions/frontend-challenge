import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomeContainer} exact />
    </Switch>
  );
};

export default Routes;
