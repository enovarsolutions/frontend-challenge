import React from "react";
import "./style.css";

import MyLink from "../MyLink";

const ItemMain = ({ icon, description, subdescription, route, disabled }) => {
  return (
    <div className="col-6 p-0">
      <MyLink route={!!disabled ? "" : route}>
        <div
          className={`card my-3 mx-3 px-1 py-3 card-main shadow ${
            !!disabled && "disabled"
          }`}
        >
          <div className="card-body">
            <img src={icon} alt={description} height="50px" width="50px" />
            <h5 className="text-dark">{description}</h5>
            <h6 className="text-pink">{subdescription}</h6>
          </div>
        </div>
      </MyLink>
    </div>
  );
};

export default ItemMain;
