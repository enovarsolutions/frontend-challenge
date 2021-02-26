import React from "react";
import ItemMain from "../ItemMain";

import newLoan from "../../assets/img/newLoan.png";
import portability from "../../assets/img/portability.png";
import refinancing from "../../assets/img/refinancing.png";
import creditCard from "../../assets/img/creditCard.png";

import { formatNumber } from "../../helpers/formatHelpers";

const Main = ({
  loanMaxValue,
  portabilityMaxValue,
  refinanceMaxValue,
  creditCardMaxValue,
}) => {
  return (
    <div className="container px-3">
      <h4 className=" pt-4 pb-0">Oportunidades</h4>
      <div className="row">
        <ItemMain
          icon={newLoan}
          description="Novo Empréstimo"
          subdescription={`Até ${formatNumber(loanMaxValue)}`}
          route="newloan/values"
        />
        <ItemMain
          icon={portability}
          description="Portabilidade"
          subdescription={`Até ${formatNumber(portabilityMaxValue)}`}
          route="newloan/portability"
        />
        <ItemMain
          icon={refinancing}
          description="Refinanciamento"
          subdescription={`Até ${formatNumber(refinanceMaxValue)}`}
          route="newloan/refinancing"
          disabled
        />
        <ItemMain
          icon={creditCard}
          description="Cartão de crédito consignado"
          subdescription={`Até ${formatNumber(creditCardMaxValue)}`}
          route="credit"
          disabled
        />
      </div>
    </div>
  );
};

export default Main;
