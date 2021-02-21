import React from "react";
import "./style.css";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faHome,
  faUserCircle,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/",
    icon: faHome,
    label: "Início",
  },
  {
    route: "/contracts",
    icon: faFileAlt,
    label: "Contratos",
  },
  {
    route: "/doubts",
    icon: faQuestionCircle,
    label: "Dúvidas",
  },
  {
    route: "/account",
    icon: faUserCircle,
    label: "Conta",
  },
];

const Footer = () => {
  return (
    <nav
      className="navbar fixed-bottom navbar-light bottom-tab-nav"
      role="navigation"
    >
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {tabs.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <NavLink
                to={tab.route}
                className="nav-link bottom-nav-link"
                activeClassName="active"
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={tab.icon} />
                  <div className="bottom-tab-label">{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
    </nav>
  );
};
export default Footer;
