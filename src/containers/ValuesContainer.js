import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchValues,
  valueSelector,
  getValueSelected,
  getError,
} from "../store/slices/value";

import Value from "../pages/Loan/views/Value";

import { inRange } from "../helpers/rangeHelper";
import { formatNumber } from "../helpers/formatHelpers";

const ValuesContainer = ({ setPrevPage }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { value } = useSelector(valueSelector);
  const {
    maxValue,
    minValue,
    suggestedValues,
    hasErros,
    error,
    loading,
    valueSelected,
  } = value;

  React.useEffect(() => {
    setPrevPage("/");
  });

  React.useEffect(() => {
    dispatch(fetchValues());
  }, [dispatch]);

  const handleValue = () => {
    if (!inRange(valueSelected, minValue, maxValue)) {
      dispatch(
        getError(
          `Escolha um valor entre ${formatNumber(minValue)} e ${formatNumber(
            maxValue
          )}`
        )
      );

      return false;
    }
    dispatch(getError(""));
    history.push("/newloan/period", { value: valueSelected });
  };
  return (
    <Value
      handleValue={handleValue}
      dispatch={dispatch}
      getValueSelected={getValueSelected}
      maxValue={maxValue}
      minValue={minValue}
      suggestedValues={suggestedValues}
      hasErros={hasErros}
      error={error}
      loading={loading}
    />
  );
};

export default ValuesContainer;
