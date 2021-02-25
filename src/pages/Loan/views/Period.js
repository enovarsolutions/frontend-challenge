import React from "react";
import "./style.css";
import ItemPeriod from "../../../components/ItemPeriod";

const Period = ({ handlePeriod, setPeriodSelected }) => {
  return (
    <>
      <h6 className="pb-2 font-weight-bold">
        Em quanto tempo você quer pagar?
      </h6>
      <div className="row">
        <ItemPeriod period={48} periodDescription="meses" />
        <ItemPeriod period={60} periodDescription="meses" />
        <ItemPeriod period={72} periodDescription="meses" />
        <ItemPeriod period={84} periodDescription="meses" />
      </div>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <input
          type="number"
          className="underline"
          onChange={(e) => setPeriodSelected(e.target.value)}
          placeholder="00"
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
