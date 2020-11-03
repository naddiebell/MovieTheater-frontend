/* eslint-disable func-names */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BuyTickets() {
  const [displayTicket, setDisplayTicket] = useState(false);
  const [date, setDate] = useState("YYYY-MM-DD");
  const [chooseFilm, setChooseFilm] = useState("-");
  const [chooseTicket, setChooseTicket] = useState("");
  // const [data, setData] = useState({
  //   filmName: "",
  //   dateOfFilm: "YYYY-MM-DD",
  //   seatAmount: "",
  // });

  //const { filmName, dateOfFilm, seatAmount } = data;

  // useEffect(() => {
  //   const fetchData = async () => {
  //   const result = await axios("/api/v1/tickets", {
  //     manual: true,
  //     data: { filmName, dateOfFilm, seatAmount },
  //     method: "post",
  //   });
  //   setData(result.data);
  // }, []
  // );

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleFilmChange = (e) => {
    setChooseFilm(e.target.value);
  };

  const handleTicketChange = (e) => {
    setChooseTicket(e.target.value);
  };

  function handleDisplay(e) {
    e.preventDefault();
    console.log(date, chooseFilm, chooseTicket);
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
      })
      .then(function () {
        // always executed
      });
    if (date !== "YYYY-MM-DD" && chooseFilm !== "-" && chooseTicket) {
      setDisplayTicket(true);
    }
  }

  return (
    <>
      <form onSubmit={(e) => handleDisplay(e)}>
        <label>Välj ett datum:</label>
        <input type="date" value={date} onChange={handleDateChange}></input>

        <label>Välj en film: </label>
        <select value={chooseFilm} onChange={handleFilmChange} name="movies">
          <option selected value="-">
            -
          </option>
          <option value="The-Princess-Bride">The Princess Bride</option>
          <option value="Pippi-Langstrumpor">Pippi Långstrumpor</option>
        </select>
        <label>Biljetter:</label>
        <input
          value={chooseTicket}
          onChange={handleTicketChange}
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="25"
        ></input>

        <input type="submit"></input>
      </form>
      <p>Alla filmer börjar kl. 7</p>
      <p>Betalning är endast kontant vid dörren</p>
      <p>Priset är 50 kr per biljett</p>
      <div className="background">
        {displayTicket && (
          <div className="card">
            <img />
            <div className="container">
              <h4>
                <b>Biljetter</b>
              </h4>
              <p>Bio</p>
              <p>Datum</p>
              <p>Antal</p>
              <p>Skriv Ut</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
