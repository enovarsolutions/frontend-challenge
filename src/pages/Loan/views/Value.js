import React from "react";
import "./style.css";
import ItemValue from "../../../components/ItemValue";

const Value = ({
  handleValue,
  dispatch,
  getValueSelected,
  maxValue,
  minValue,
  suggestedValues,
  hasErros,
  error,
  loading,
}) => {
  return (
    <>
      <h6 className="pb-2 font-weight-bold">De Quanto você precisa?</h6>
      <p className="text-danger">{error && error}</p>
      <div className="row">
        {suggestedValues.map((value) => (
          <ItemValue
            key={value}
            value={value}
            getValueSelected={getValueSelected}
            dispatch={dispatch}
          />
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <label className="font-weight-bold my-auto" htmlFor="anotherValue">
          Outro Valor
        </label>
        <input
          type="number"
          className="underline"
          onChange={(e) => dispatch(getValueSelected(e.target.value))}
          placeholder="R$ 00,00"
          min={minValue}
          max={maxValue}
        />
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="text-center">
          <button
            onClick={handleValue}
            className="btn bg-pink text-white px-5 btn-continue"
          >
            Continuar
          </button>
        </div>
        <a
          href="###"
          onClick={() => console.log("validar")}
          className="font-weight-bold underline m-3 text-pink"
        >
          <p>Simule pela parcela</p>{" "}
        </a>
      </div>
    </>
  );
};

export default Value;
