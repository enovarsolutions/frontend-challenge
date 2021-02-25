import React from "react";
import { Route, Switch } from "react-router-dom";
import HeaderLoan from "../../components/HeaderLoad";
import { useRouteMatch } from "react-router-dom";

import ValuesContainer from "../../containers/ValuesContainer";
import PeriodContainer from "../../containers/PeriodContainer";
import ResultContainer from "../../containers/ResultContainer";
const Loan = ({ prevPage, setPrevPage }) => {
  let { path } = useRouteMatch();
  return (
    <>
      <HeaderLoan prevRoute={prevPage} />
      <div className="container pt-4">
        <Switch>
          <Route exact path={`${path}/values`}>
            <ValuesContainer setPrevPage={setPrevPage} />
          </Route>
          <Route path={`/newloan/period`}>
            <PeriodContainer setPrevPage={setPrevPage} />
          </Route>
          <Route exact path={`/newloan/result`}>
            <ResultContainer setPrevPage={setPrevPage} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Loan;
