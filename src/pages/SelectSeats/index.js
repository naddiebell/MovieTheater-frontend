import React from "react";
import "./style.css";
import Seat from "../../Components/Seat/Seat";

export default function SelectSeats() {
  function renderSeat(i) {
    return <Seat value={i} />;
  }

  return (
    <div>
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

    </div>
  );
}
