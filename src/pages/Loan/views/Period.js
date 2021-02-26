import React from "react";
import "./style.css";
import ItemPeriod from "../../../components/ItemPeriod";

const Period = ({
  handlePeriod,
  dispatch,
  getPeriodSelected,
  maxValue,
  minValue,
  suggestedInstallments,
  hasErros,
  error,
  loading,
}) => {
  return (
    <>
      <h6 className="pb-2 font-weight-bold">
        Em quanto tempo você quer pagar?
      </h6>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {suggestedInstallments.map((period) => (
          <ItemPeriod
            key={period}
            period={period}
            getPeriodSelected={getPeriodSelected}
            dispatch={dispatch}
            periodDescription="meses"
          />
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <input
          type="number"
          className="underline"
          onChange={(e) => dispatch(getPeriodSelected(e.target.value))}
          placeholder="00"
          min={minValue}
          max={maxValue}
        />
        <label className="font-weight-bold my-auto pl-1">meses</label>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="text-center">
          <button
            onClick={handlePeriod}
            className="btn bg-pink text-white px-5 btn-continue"
          >
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};

export default Period;
