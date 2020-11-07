/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useState } from "react";
import axios from "axios";
import "../../Components/Card/card.css";

export default function BuyTickets(props) {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [date, setDate] = useState("YYYY-MM-DD");
  const [chooseFilm, setChooseFilm] = useState("-");
  const [chooseTicket, setChooseTicket] = useState("");
  const { movies } = props;

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

  const showTicket = () => {
    if (date !== "YYYY-MM-DD" && chooseFilm !== "-" && chooseTicket) {
      
      const aMovie = movies.filter(
        (element) => element.movieTitle === chooseFilm
      );
      const movieTimes = aMovie[0].time;
      console.log(movieTimes);
      const filmDisplay = movieTimes.map((element) => <div>{element}</div>);
      return filmDisplay;
    }
  };

  function handleDisplay(e) {
    e.preventDefault();
    //showTicket();
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

      <p>Alla filmer börjar kl. 7</p>
      <p>Betalning är endast kontant vid dörren</p>
      <p>Priset är 50 kr per biljett</p>

      <div className="background">
        {displayTicket && (
          <>
            <div>{showTicket()}</div>
            <div className="card">
              <div className="container">
                <h4>
                  <b>Biljetter</b>
                </h4>
                <p>Bio: {chooseFilm} </p>
                <p>Datum: {date} </p>
                <p>Antal: {chooseTicket} </p>
                <p>Skriv Ut</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
