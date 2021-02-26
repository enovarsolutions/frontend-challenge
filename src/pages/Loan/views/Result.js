import React from "react";
import "./style.css";

import { ReactComponent as Arrow } from "../../../assets/svg/keyboard_arrow_down-24px.svg";

import { formatNumber } from "../../../helpers/formatHelpers";
const Result = ({
  numberOfInstallments,
  installmentsValue,
  contractValue,
  interest,
}) => {
  return (
    <>
      <h5 className="pb-2 font-weight-bold">Escolha um banco</h5>

      <div className="card choice-card ">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="logo-tudo"></div>
            <div className="d-flex flex-column">
              <span>
                <strong>{numberOfInstallments} parcelas de</strong>{" "}
              </span>
              <h4 className="text-pink">
                <strong> {formatNumber(installmentsValue)}</strong>
              </h4>
              <span>
                Total de{" "}
                {formatNumber(installmentsValue * numberOfInstallments)}
              </span>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="px-4">
                <span className="d-block">com taxa de</span>
                <span>
                  <strong>{!isNaN(interest) ? interest : 0}% a.m.</strong>
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
