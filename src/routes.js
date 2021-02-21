import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import LoanContainer from "./containers/LoanContainer";

const Example = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomeContainer} exact />
      <Route path="/newloan" component={LoanContainer} />
      <Route path="/contracts" component={() => <Example name="contracts" />} />
      <Route path="/doubts" component={() => <Example name="doubts" />} />
      <Route path="/account" component={() => <Example name="account" />} />
    </Switch>
  );
};

export default Routes;
