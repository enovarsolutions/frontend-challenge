import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHome, homeSelector } from "../store/slices/home";

import Home from "../pages/Home";
const HomeContainer = () => {
  const dispatch = useDispatch();

  const { home } = useSelector(homeSelector);

  const {
    creditCardMaxValue,
    hasErros,
    loading,
    loanMaxValue,
    portabilityMaxValue,
    refinanceMaxValue,
    totalMaxValue,
  } = home;

  React.useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  return (
    <Home
      creditCardMaxValue={creditCardMaxValue}
      hasErros={hasErros}
      loading={loading}
      loanMaxValue={loanMaxValue}
      portabilityMaxValue={portabilityMaxValue}
      refinanceMaxValue={refinanceMaxValue}
      totalMaxValue={totalMaxValue}
    />
  );
};

export default HomeContainer;
