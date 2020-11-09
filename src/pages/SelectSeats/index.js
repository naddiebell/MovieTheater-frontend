import React, { useState, useContext } from "react";
import "./style.css";
import { useNavigate } from "@reach/router";
import Seat from "../../Components/Seat/Seat";
import "../../SharedStyles/Button/button.css";
import AppContext from "../../store/context";

export default function SelectSeats() {
  const [seatValue, setSeatValue] = useState(Array(25).fill(null));
  // eslint-disable-next-line no-unused-vars
  const [displaySeat, setDisplaySeat] = useState(false);

  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  console.log("state", state )

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

  function getSeats() {
    const indexes = [];
    for (let i = 0; i < seatValue.length; i += 1) {
      if (seatValue[i] === "X") {
        indexes.push(i);
      }
    }
    if (indexes.length === 0) {
      return "Välj minst en plats.";
    }
    if (indexes.length === 1) {
      return `Din valda plats är: ${indexes[0]}`;
    }
    const seating = indexes.map((seats) => {
      return ` ${seats}`;
    });
    return `Dina valda platser är: ${seating}`;
  }

  const handleClick = () => {
    setDisplaySeat(true);
    navigate("/verify");
  };

  return (
    <>
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
      <button onClick={handleClick} type="button" className="myButton">
        Välj Platser
      </button>
      <p>{getSeats()}</p>
      <p>Alla biljetter är 80 kr</p>
      <p>{state.ticket.filmTitle}</p>
      <p>{state.ticket.date}</p>
    </>
  );
}
