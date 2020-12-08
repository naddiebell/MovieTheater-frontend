/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable func-names */
import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import "../../SharedStyles/Button/button.css";
import { useNavigate } from "@reach/router";
import AppContext from "../../store/context";
import dates from "./dates";

const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function BuyTickets(props) {
  const { t } = useTranslation();
  const { dispatch } = useContext(AppContext);
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

  const handleButton = (aMovie) => {
    if (date) {
      setTicketData({ ...ticketData, filmTitle: aMovie.movieTitle });
      navigate("/platser");
    } else {
      // eslint-disable-next-line no-alert
      alert("Please select a movie and a date");
    }
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
    if (ticketData.filmTitle === "Välj en film:") {
      setTicketData({ ...ticketData, date: "", filmTitle: "" });
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
    return dates.map((dateE) => {
      return (
        <option value={dateE} key={dateE}>
          {dateE}
        </option>
      );
    });
  };

  const renderMovie = (aMovie, aDate) => {
    if (!aMovie) {
      return;
    }
    const timeButton = aMovie.time.map((movieTime) => {
      return (
        <button
          onClick={() => handleButton(aMovie)}
          type="button"
          className="myButton"
        >
          {movieTime}
        </button>
      );
    });

    return (
      <div className="backgroundShowSelection">
        <div className="flexMovItems">
          <div>
            <img
              src={aMovie.img}
              alt={aMovie.movieTitle}
              className="movieImg"
            />
          </div>
          <div className="movieDetails">
            {aMovie.movieTitle}
            <p>Datum: {aDate} </p>
            <p>{timeButton}</p>
          </div>
        </div>
      </div>
    );
  };

  const showSelection = (selectedDate, selectedMovie) => {
    if (!selectedDate && !selectedMovie) {
      return;
    }
    const day = getDay(selectedDate);

    let moviesArr = movies.slice();
    if (selectedDate !== "") {
      moviesArr = moviesArr.filter((movieInfo) => {
        return movieInfo.daysPlaying.includes(day);
      });
    }
    if (selectedMovie !== "") {
      moviesArr = moviesArr.filter((movieInfo) => {
        return movieInfo.movieTitle === selectedMovie;
      });
    }
    return moviesArr.map((aMovie) => renderMovie(aMovie, selectedDate));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleClearButton = (e) => {
    e.preventDefault();
    setTicketData({ ...ticketData, date: "", filmTitle: "" });
  };

  return (
    <>
      <h1 className="pageH1">{t("Ticket Page H1")}</h1>
      <form className="form">
        <button type="button" className="myButton" onClick={handleClearButton}>
          {t("Clear Selections")}
        </button>
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
          <input
            value={ticketData.ticketAmount}
            onChange={handleChange}
            type="number"
            id="quantity"
            name="ticketAmount"
            min="0"
            max="25"
            placeholder="Biljetter"
          />
        </label>
      </form>

      <div className="background">
        <>
          <div className="showSelection">
            {showSelection(ticketData.date, ticketData.filmTitle)}
          </div>
        </>
      </div>
    </>
  );
}
