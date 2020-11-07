import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./App.css";
import data from "./data.json";
import Home from "./pages/Home";
import BuyTickets from "./pages/BuyTickets";
import MovieDetails from "./pages/MovieDetails";
import SelectSeats from "./pages/SelectSeats";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // eslint-disable-next-line no-unused-vars
      const response = await setMovies(data.movies);
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <Router>
        <Home movies={movies} path="/" />
        <BuyTickets movies={movies} path="biljetter" />
        <MovieDetails path="filmer" />
        <SelectSeats path="/satten" />
      </Router>
    </>
  );
}

export default App;
