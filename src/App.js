import React, { useState, useEffect, useReducer } from "react";
import { Router } from "@reach/router";
import AppContext from "./store/context";
import store from "./store";
import "./App.css";
import data from "./data.json";
import Home from "./pages/Home";
import BuyTickets from "./pages/BuyTickets";
import MovieDetails from "./pages/MovieDetails";
import SelectSeats from "./pages/SelectSeats";
import NavBar from "./Components/NavBar/NavBar";
import Email from "./pages/Email";

function App() {
  const [state, dispatch] = useReducer(store.reducer, store.initialState);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line no-unused-vars
      const response = await setMovies(data.movies);
    };
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <AppContext.Provider value={{ state, dispatch }}>
        <Router>
          <Home movies={movies} path="/" />
          <BuyTickets movies={movies} path="biljetter" />
          <MovieDetails path="filmer" />
          <SelectSeats path="/platser" />
          <Email path="/verify" />
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
