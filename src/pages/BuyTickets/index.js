/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "../../Components/Card/card.css";
import "./style.css";
import "../../SharedStyles/Button/button.css";
import { useNavigate } from "@reach/router";
import AppContext from "../../store/context";


export default function BuyTickets(props) {
  const { state, dispatch } = useContext(AppContext);
  const [displayTicket, setDisplayTicket] = useState(false);
  const [ticketData, setTicketData] = useState({
    date: "",
    filmTitle: "",
    ticketAmount: "",
  });
  const { movies } = props;

  const navigate = useNavigate();

  const { date, filmTitle, ticketAmount } = ticketData;

  useEffect(() => {
    if (ticketData) {
      dispatch({ type: "setTicket", data: ticketData });
    }
  }, [ticketData, dispatch]);

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/platser");
  };

  const movieTitles = () => {
    if (movies.length === 0) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return movies.map((element, i) => {
      return (
        <option value={element.movieTitle} key={i}>
          {element.movieTitle}
        </option>
      );
    });
  };

  const handleChange = async (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const showSelection = () => {
    if (date !== "" && filmTitle !== "" && ticketAmount) {
      const aMovie = movies.filter(
        (element) => element.movieTitle === filmTitle
      );

      const { img } = aMovie[0];

      const { movieTitle } = aMovie[0];
      const movieTimes = aMovie[0].time.map((element, index) => (
        <button
          onClick={handleButton}
          type="button"
          className="myButton"
          key={index}
        >
          {element}
        </button>
      ));

      const filmDisplay = (
        <div>
          {movieTitle}
          <p>Datum: {date} </p>
          <img src={img} alt={movieTitle} className="movieImg" />
          {movieTimes}
        </div>
      );

      return filmDisplay;
    }
  };

  function handleDisplay(e) {
    e.preventDefault();
    setDisplayTicket(true);
    axios
      .post("http://localhost:5709/api/v1/tickets", {
        filmName: filmTitle,
        dateOfFilm: date,
        seatAmount: ticketAmount,
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
console.log("aaaa" , state)
  return (
    <>
      <form onSubmit={(e) => handleDisplay(e)}>
        <label htmlFor="date">
          Välj ett datum:
          <input id="date" type="date" value={ticketData.date} onChange={handleChange} name="date" />
        </label>

        <label htmlFor="filmTitle">
          Välj en film:
          <select
            id="filmTitle"
            value={ticketData.filmTitle}
            onChange={handleChange}
            name="filmTitle"
          >
            <option defaultValue="default">-</option>
            {movieTitles()}
          </select>
        </label>

        <label htmlFor="quantity">
          Biljetter:
          <input
            value={ticketData.ticketAmount}
            onChange={handleChange}
            type="number"
            id="quantity"
            name="ticketAmount"
            min="0"
            max="25"
          />
        </label>
        <input type="submit" />
      </form>

      <p>Betalning är endast kontant vid dörren</p>
      <p>Priset är 80 kr per biljett</p>

      <div className="background">
        {displayTicket && (
          <>
            <div>{showSelection()}</div>
          </>
        )}
      </div>
    </>
  );
}
