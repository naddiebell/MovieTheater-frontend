import React, { useState } from "react";
import "./style.css";

function Seat({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Seat;

// console.log("nextSeat[i]", nextSeat[i])
// console.log('nextSeat', nextSeat)