import React from "react";
import ItemMain from "../ItemMain";

import newLoan from "../../assets/img/newLoan.png";
import portability from "../../assets/img/portability.png";
import refinancing from "../../assets/img/refinancing.png";
import creditCard from "../../assets/img/creditCard.png";

const Main = () => {
  return (
    <div className="container px-0">
      <h3 className=" pt-5 pb-0">Oportunidades</h3>
      <div className="row">
        <ItemMain
          icon={newLoan}
          description="Novo Empréstimo"
          subdescription="Até R$ 3.058,10"
          route="newloan"
        />
        <ItemMain
          icon={portability}
          description="Portabilidade"
          subdescription="Até R$ 2.000,00"
          route="portability"
        />
        <ItemMain
          icon={refinancing}
          description="Refinanciamento"
          route="refinancing"
          disabled
        />
        <ItemMain
          icon={creditCard}
          description="Cartão de crédito consignado"
          route="credit"
          disabled
        />
      </div>
    </div>
  );
};

export default Main;
