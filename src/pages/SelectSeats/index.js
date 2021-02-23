/* eslint-disable no-console */
/* eslint-disable object-shorthand */
import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { loadStripe } from "@stripe/stripe-js";
import Seat from "../../Components/Seat/Seat";
import "../../SharedStyles/Button/button.css";
import AppContext from "../../store/context";

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const stripePK = process.env.REACT_APP_STRIPE_PUBLISHABLE;
const stripePromise = loadStripe(stripePK);

export default function SelectSeats() {
  const [seatValue, setSeatValue] = useState(Array(25).fill(null));
  const { state, dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const [userData, setUserData] = useState({
    date: state.ticket.date,
    filmTitle: state.ticket.filmTitle,
    ticketAmount: state.ticket.ticketAmount,
    userName: "",
    userEmail: "",
    price: "",
    seats: [],
  });

  useEffect(() => {
    dispatch({ type: "setTicket", data: userData });
  }, [dispatch, userData]);

  const indexes = [];

  const displayedPrice = () => {
    const pris = indexes.length * 80;
    return `Pris är ${pris} kr`;
  };

  const popCornEmoji = String.fromCodePoint(0x1f37f);

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

  function getSeats() {
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
    userData.seats.push(seating);
    return `Dina valda platser är: ${seating}`;
  }

  const totalPrice = (numberOfSeats) => {
    return numberOfSeats * 8000;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    const priceTot = totalPrice(indexes.length);
    setUserData({
      ...userData,
      [name]: value,
      ticketAmount: indexes.length,
      price: priceTot,
    });
  };

  const createTicket = async () => {
    const response = await axios.post(`${baseUrl}/api/v1/tickets/`, {
      filmName: state.ticket.filmTitle,
      date: state.ticket.date,
      seatAmount: userData.ticketAmount,
      price: state.ticket.price,
      userName: userData.userName,
      userEmail: userData.userEmail,
      seats: userData.seats[0],
    });
    return response.data;
  };

  const handlePay = async (e) => {
    e.preventDefault();
    const ticket = await createTicket();

    const stripe = await stripePromise;
    const res = await axios.post(`${baseUrl}/create-checkout-session`, {
      ticket,
    });

    const session = res.data;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <>
      <h1>{t("Choose Seats")}</h1>
      <div className="seatsBackgroundDiv">
        <div className="seatStyle">
          <div className="receiptInfo">
            <h3>Receipt Info</h3>
            <p className="receiptText">{getSeats()}</p>
            <p className="receiptText">Alla biljetter är 80 kr med moms</p>
            <p className="receiptText selectedMovie">{state.ticket.filmTitle}</p>
            <p className="receiptText">{state.ticket.date}</p>
            <p className="receiptText">{displayedPrice()}</p>
          </div>

          <div className="seatsBackground">
            <div className="screen">Screen</div>
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
          <form className="formInfo">
            <label htmlFor="userName">
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Name"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="userEmail">
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                placeholder="Email"
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={handlePay} className="myButton">
              {t("Pay")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
