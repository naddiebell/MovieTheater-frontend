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

  let popCornEmoji = String.fromCodePoint(0x1F37F);


  const navigate = useNavigate();
  const { state } = useContext(AppContext);

  function renderSeat(i) {
    return (
      <Seat
        value={seatValue[i]}
        onClick={() => {
          const currentSeat = seatValue.slice();

          if (currentSeat[i] === null) {
            currentSeat[i] = popCornEmoji;
            setSeatValue(currentSeat);
          } else {
            currentSeat[i] = null;
            setSeatValue(currentSeat);
          }
        }}
      />
    );
  }

  let emoji1 = String.fromCodePoint(0x1F354);
 
  function getSeats() {
    const indexes = [];
    for (let i = 0; i < seatValue.length; i += 1) {
      if (seatValue[i] === popCornEmoji) {
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
        <div className="seatsBackground">
          <div className="board-row row1">
            {renderSeat(0)}
            {renderSeat(1)}
            {renderSeat(2)}
            {renderSeat(3)}
            {renderSeat(4)}
          </div>

          <div className="board-row row2">
            {renderSeat(5)}
            {renderSeat(6)}
            {renderSeat(7)}
            {renderSeat(8)}
            {renderSeat(9)}
          </div>

          <div className="board-row row3">
            {renderSeat(10)}
            {renderSeat(11)}
            {renderSeat(12)}
            {renderSeat(13)}
            {renderSeat(14)}
          </div>

          <div className="board-row row4">
            {renderSeat(15)}
            {renderSeat(16)}
            {renderSeat(17)}
            {renderSeat(18)}
            {renderSeat(19)}
          </div>

          <div className="board-row row5">
            {renderSeat(20)}
            {renderSeat(21)}
            {renderSeat(22)}
            {renderSeat(23)}
            {renderSeat(24)}
          </div>
        </div>
      </div>
      <button onClick={handleClick} type="button" className="myButton">
        Välj Platser 🍿     
      </button>
      <p>{getSeats()}</p>
      <p>Alla biljetter är 80 kr</p>
      <p>{state.ticket.filmTitle}</p>
      <p>{state.ticket.date}</p>
    </>
  );
}
