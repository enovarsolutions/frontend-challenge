import React from "react";

import Value from "../pages/Loan/views/Value";

import { useHistory } from "react-router-dom";
const ValuesContainer = ({ setPrevPage }) => {
  const [valueSelected, setValueSelected] = React.useState("");
  let history = useHistory();

  React.useEffect(() => {
    setPrevPage("/");
  });

  const handleValue = (value) => {
    if (typeof valueSelected === "string") {
      Number(valueSelected);
    }

    history.push("/newloan/period");
  };
  return (
    <Value handleValue={handleValue} setValueSelected={setValueSelected} />
  );
};

export default ValuesContainer;
