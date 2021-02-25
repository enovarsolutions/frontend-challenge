import React from "react";

import Loan from "../pages/Loan";
const LoanContainer = () => {
  const [prevPage, setPrevPage] = React.useState("/");

  return <Loan prevPage={prevPage} setPrevPage={setPrevPage} />;
};

export default LoanContainer;
