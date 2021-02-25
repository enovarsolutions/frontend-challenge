import React from "react";
import "./style.css";
import ItemValue from "../../../components/ItemValue";

const Value = ({ handleValue, setValueSelected }) => {
  return (
    <>
      <h6 className="pb-2 font-weight-bold">De Quanto você precisa?</h6>
      <div className="row">
        <ItemValue value={300} setValueSelected={setValueSelected} />
        <ItemValue value={2660} setValueSelected={setValueSelected} />
        <ItemValue value={5030} setValueSelected={setValueSelected} />
        <ItemValue value={7407} setValueSelected={setValueSelected} />
      </div>
      <div className="d-flex align-items-center justify-content-center mb-5">
        <label className="font-weight-bold my-auto" htmlFor="anotherValue">
          Outro Valor
        </label>
        <input
          type="number"
          className="underline"
          onChange={(e) => setValueSelected(e.target.value)}
          placeholder="R$ 00,00"
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
