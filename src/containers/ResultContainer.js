import React from "react";

import Result from "../pages/Loan/views/Result";

const ResultContainer = ({ setPrevPage }) => {
  React.useEffect(() => {
    setPrevPage("/newloan/period");
  });
  return <Result />;
};

export default ResultContainer;
