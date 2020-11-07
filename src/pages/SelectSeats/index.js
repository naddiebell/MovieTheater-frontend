import React, { useState } from "react";
import "./style.css";
import Seat from "../../Components/Seat/Seat";

export default function SelectSeats() {
  const [seatValue, setSeatValue] = useState(Array(25).fill(null));

  function renderSeat(i) {
    return (
      <Seat
        value={seatValue[i]}
        onClick={() => {
          const currentSeat = seatValue.slice();

          if (currentSeat[i] === null) {
            currentSeat[i] = "X";
            setSeatValue(currentSeat);
          } else {
            currentSeat[i] = null;
            setSeatValue(currentSeat);
          }

        }}
      />
    );
  }

  return (
    <div className="seatStyle">
      <div className="board-row">
        {renderSeat(0)}
        {renderSeat(1)}
        {renderSeat(2)}
        {renderSeat(3)}
        {renderSeat(4)}
      </div>

      <div className="board-row">
        {renderSeat(5)}
        {renderSeat(6)}
        {renderSeat(7)}
        {renderSeat(8)}
        {renderSeat(9)}
      </div>

      <div className="board-row">
        {renderSeat(10)}
        {renderSeat(11)}
        {renderSeat(12)}
        {renderSeat(13)}
        {renderSeat(14)}
      </div>

      <div className="board-row">
        {renderSeat(15)}
        {renderSeat(16)}
        {renderSeat(17)}
        {renderSeat(18)}
        {renderSeat(19)}
      </div>

      <div className="board-row">
        {renderSeat(20)}
        {renderSeat(21)}
        {renderSeat(22)}
        {renderSeat(23)}
        {renderSeat(24)}
      </div>
    </div>
  );
}
