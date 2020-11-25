/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
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
import dates from "./dates";

const backendURL = process.env.REACT_APP_BACKEND_URL;

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

  const getDay = (ticketDate) => {
    if (ticketDate.includes("måndag")) {
      return "måndag";
    }
    if (ticketDate.includes("tisdag")) {
      return "tisdag";
    }
    if (ticketDate.includes("onsdag")) {
      return "onsdag";
    }
    if (ticketDate.includes("torsdag")) {
      return "torsdag";
    }
    if (ticketDate.includes("fredag")) {
      return "fredag";
    }
    if (ticketDate.includes("lördag")) {
      return "lördag";
    }
    if (ticketDate.includes("söndag")) {
      return "söndag";
    }
  };

  useEffect(() => {
    dispatch({ type: "setTicket", data: ticketData });

    getDay(ticketData.date);
  }, [dispatch, ticketData]);

  const handleButton = (e) => {
    e.preventDefault();
    navigate("/platser");
  };

  const movieTitles = () => {
    if (movies.length === 0) {
      return;
    }
    if (ticketData.date) {
      const day = getDay(ticketData.date);
      const getMovieByDate = movies.filter((movie) => {
        return movie.daysPlaying.includes(day);
      });
      return getMovieByDate.map((aMovie) => {
        return (
          <option value={aMovie.movieTitle} key={aMovie.id}>
            {aMovie.movieTitle}
          </option>
        );
      });
    }
    return movies.map((element) => {
      return (
        <option value={element.movieTitle} key={element.id}>
          {element.movieTitle}
        </option>
      );
    });
  };

  const selectDates = () => {
    if (dates.length === 0) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return dates.map((dateE, i) => {
      return (
        <option value={dateE} key={i}>
          {dateE}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  // eslint-disable-next-line consistent-return
  const showSelection = () => {
    if (date !== "" && filmTitle !== "" && ticketAmount) {
      const aMovie = movies.filter(
        (element) => element.movieTitle === filmTitle
      );

      const { img } = aMovie[0];

      const { movieTitle } = aMovie[0];
      const movieTimes = aMovie[0].time.map((element) => (
        <button
          onClick={handleButton}
          type="button"
          className="myButton"
          key={element.id}
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
      .post(`${backendURL}/api/v1/tickets`, {
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

  return (
    <>
      <h1 className="pageH1">Biljetter till föreställningar i Stockholm</h1>
      <form onSubmit={(e) => handleDisplay(e)} className="form">
        <label htmlFor="date">
          <select
            id="date"
            type="date"
            value={ticketData.date}
            onChange={handleChange}
            name="date"
          >
            <option defaultValue="default">Välj en datum</option>
            {selectDates()}
          </select>
        </label>

        <label htmlFor="filmTitle">
          <select
            id="filmTitle"
            value={ticketData.filmTitle}
            onChange={handleChange}
            name="filmTitle"
          >
            <option defaultValue="default">Välj en film:</option>
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
        <button className="myButton" type="submit">
          Visa Urval
        </button>
      </form>

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
