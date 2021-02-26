import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Home = ({
  creditCardMaxValue,
  hasErros,
  loading,
  loanMaxValue,
  portabilityMaxValue,
  refinanceMaxValue,
  totalMaxValue,
}) => {
  return (
    <>
      <Header totalMaxValue={totalMaxValue} />
      {loading && <h1>Carregando</h1>}
      {!loading && (
        <Main
          creditCardMaxValue={creditCardMaxValue}
          loanMaxValue={loanMaxValue}
          portabilityMaxValue={portabilityMaxValue}
          refinanceMaxValue={refinanceMaxValue}
        />
      )}
    </>
  );
};

export default Home;
