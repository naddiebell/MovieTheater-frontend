<<<<<<< HEAD
import React from "react"
import {Router} from "@reach/router"
import './App.css';
import Home from "./pages/Home"
import BuyTickets from "./pages/BuyTickets"
import Locations from "./pages/Locations"
import MovieDetails from "./pages/MovieDetails"
import SelectTickets from "./pages/SelectTickets"

function App() {
  return (
    <Router>
      <Home path="/" />
      <BuyTickets path="biljetter" />
      <Locations path="platser"/>
      <MovieDetails path="filmer"/>
      <SelectTickets path="satten"/>
    </Router>
  );
=======
import React from "react";
import "./App.css";

function App() {
  return <div />;
>>>>>>> 612c9fa285698fb8f29da90b57e6aa5919427afe
}

export default App;