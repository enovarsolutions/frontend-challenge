import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  fetchPeriods,
  periodSelector,
  getPeriodSelected,
  getError,
} from "../store/slices/period";

import Period from "../pages/Loan/views/Period";

import { inRange } from "../helpers/rangeHelper";
const PeriodContainer = ({ setPrevPage }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { period } = useSelector(periodSelector);

  const {
    error,
    hasErros,
    loading,
    maxValue,
    minValue,
    periodSelected,
    suggestedInstallments,
  } = period;

  React.useEffect(() => {
    setPrevPage("/newloan/values");
  });

  React.useEffect(() => {
    dispatch(fetchPeriods());
  }, [dispatch]);

  const handlePeriod = () => {
    if (!inRange(periodSelected, minValue, maxValue)) {
      dispatch(getError(`Escolha um valor entre ${minValue} e ${maxValue}`));

      return false;
    }
    dispatch(getError(""));
    history.push("/newloan/result", { period: periodSelected });
  };

  return (
    <Period
      handlePeriod={handlePeriod}
      dispatch={dispatch}
      getPeriodSelected={getPeriodSelected}
      maxValue={maxValue}
      minValue={minValue}
      suggestedInstallments={suggestedInstallments}
      hasErros={hasErros}
      error={error}
      loading={loading}
    />
  );
};

export default PeriodContainer;
