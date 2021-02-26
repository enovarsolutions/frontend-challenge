import React from "react";
import "./style.css";
import { formatNumber } from "../../helpers/formatHelpers";

const ItemValue = ({ value, getValueSelected, dispatch }) => {
  return (
    <div className="col-6 mb-3">
      <div className="card item-value ">
        <button
          className="btn"
          onClick={() => dispatch(getValueSelected(value))}
        >
          <div className="card-body text-center p-3 ">
            <p className="my-auto"> {formatNumber(value)}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemValue;
