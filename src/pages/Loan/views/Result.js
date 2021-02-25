import React from "react";
import "./style.css";

import { ReactComponent as Arrow } from "../../../assets/svg/keyboard_arrow_down-24px.svg";
const Result = () => {
  return (
    <>
      <h5 className="pb-2 font-weight-bold">Escolha um banco</h5>

      <div className="card choice-card ">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="logo-tudo"></div>
            {/* <img src={logo} className="logo-tudo" alt="Logo" width="63" /> */}
            <div className="d-flex flex-column">
              <span>
                <strong>60 parcelas de</strong>{" "}
              </span>
              <h4 className="text-pink">
                <strong>R$ 372,65</strong>
              </h4>
              <span>Total de R$ 5.030,00</span>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="px-4">
                <span className="d-block">com taxa de</span>
                <span>
                  <strong>1,30% a.m.</strong>
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <span className="d-block">Previsão de pagamento ?</span>
            <span>
              <strong>19 de maio a 01 de junho de 2020</strong>
            </span>
          </div>
          <div className="d-flex justify-content-end">
            <a className="text-pink ml-auto" href="###">
              Contratar <Arrow className="arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
