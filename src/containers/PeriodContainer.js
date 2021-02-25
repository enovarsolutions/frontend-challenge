import React from "react";
import Period from "../pages/Loan/views/Period";

import { useHistory } from "react-router-dom";

const PeriodContainer = ({ setPrevPage }) => {
  const [periodSelected, setPeriodSelected] = React.useState("");
  let history = useHistory();

  React.useEffect(() => {
    setPrevPage("/newloan/values");
  });

  const handlePeriod = (value) => {
    if (typeof periodSelected === "string") {
      Number(periodSelected);
    }

    history.push("/newloan/result");
  };

  return (
    <Period handlePeriod={handlePeriod} setPeriodSelected={setPeriodSelected} />
  );
};

export default PeriodContainer;
