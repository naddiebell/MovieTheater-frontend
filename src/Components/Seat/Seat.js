import React from "react";
import "./style.css";

function Seat({ value, onClick }) {
  return (
    <button className="square" onClick={onClick} type="button">
      {value}
    </button>
  );
}

export default Seat;

