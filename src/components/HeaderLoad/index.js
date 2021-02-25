import React from "react";
import "./style.css";
import { ReactComponent as ArrowDown } from "../../assets/svg/keyboard_arrow_down-24px.svg";
import { NavLink } from "react-router-dom";
const HeaderLoan = ({ prevRoute }) => {
  return (
    <div
      id="header-container-loan"
      className="d-flex align-items-center justify-content-center bg-black"
    >
      <NavLink
        to={prevRoute}
        className="btn btn-black arrow-prev-container p-3 mr-auto"
      >
        <ArrowDown fill="white" width="40px" height="40px" />
      </NavLink>
      <h4 className="text-white mr-auto">Novo empréstimo</h4>
    </div>
  );
};

export default HeaderLoan;
