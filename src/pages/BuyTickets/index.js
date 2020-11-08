/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import "../../Components/Card/card.css";
import "./style.css";
import "../../SharedStyles/Button/button.css";
import { useNavigate } from "@reach/router";

export default function BuyTickets(props) {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [date, setDate] = useState("YYYY-MM-DD");
  const [chooseFilm, setChooseFilm] = useState("-");
  const [chooseTicket, setChooseTicket] = useState("");
  const { movies } = props;

  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/satten");
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

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFilmChange = (e) => {
    setChooseFilm(e.target.value);
  };

  const handleTicketChange = (e) => {
    setChooseTicket(e.target.value);
  };

  const showSelection = () => {
    if (date !== "YYYY-MM-DD" && chooseFilm !== "-" && chooseTicket) {
      const aMovie = movies.filter(
        (element) => element.movieTitle === chooseFilm
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
        filmName: chooseFilm,
        dateOfFilm: date,
        seatAmount: chooseTicket,
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

  return (
    <>
      <form onSubmit={(e) => handleDisplay(e)}>
        <label htmlFor="date">
          Välj ett datum:
          <input
            id="date"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>

        <label htmlFor="filmTitle">
          Välj en film:
          <select
            id="filmTitle"
            value={chooseFilm}
            onChange={handleFilmChange}
            name="movies"
          >
            <option defaultValue="default">-</option>
            {movieTitles()}
          </select>
        </label>

        <label htmlFor="quantity">
          Biljetter:
          <input
            value={chooseTicket}
            onChange={handleTicketChange}
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max="25"
          />
        </label>
        <input type="submit" />
      </form>

      <p>Betalning är endast kontant vid dörren</p>
      <p>Priset är 50 kr per biljett</p>

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
