import React from "react";
import "./style.css";
// import logo from "../../assets/img/tudo-logo.png";

import { ReactComponent as Notification } from "../../assets/svg/notifications-24px.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/keyboard_arrow_down-24px.svg";

const Header = () => {
  return (
    <div
      id="header-container"
      className="d-flex justify-content-between bg-black"
    >
      <div id="logo" className="m-3"></div>
      <div className="pt-5 flex-grow-1 text-center text-white">
        <h4>Olá, José Carlos</h4>
        <p className="mb-0">Seu crédito disponivel é de</p>
        <h2 className="text-pink font-weight-bold">R$ 5.048,10</h2>
        <div className="arrow-container mt-4 pt-2 ">
          <div className="arrow-content rounded-circle mx-auto bg-pink">
            <ArrowDown fill="white" width="40px" height="40px" />
          </div>
        </div>
      </div>
      <button className="btn p-3 mb-auto">
        <Notification fill="white" width="30px" height="30px" />
      </button>
    </div>
  );
};

export default Header;
