import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchResult, resultSelector } from "../store/slices/result";

import Result from "../pages/Loan/views/Result";

import { resultCalc } from "../helpers/calcHelper";
const ResultContainer = ({ setPrevPage }) => {
  const dispatch = useDispatch();

  const { result } = useSelector(resultSelector);

  const { contractValue, installmentsValue, numberOfInstallments } = result;

  React.useEffect(() => {
    setPrevPage("/newloan/period");
  });

  React.useEffect(() => {
    dispatch(fetchResult());
  }, [dispatch]);

  const interest = resultCalc(
    installmentsValue,
    contractValue,
    numberOfInstallments
  );
  return (
    <Result
      numberOfInstallments={numberOfInstallments}
      installmentsValue={installmentsValue}
      contractValue={contractValue}
      interest={interest}
    />
  );
};

export default ResultContainer;
