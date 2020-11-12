import React from "react";
import MovieCarousel from "../../Components/Carousel/index";
import "./style.css";

export default function HomePage(props) {
  const { movies } = props;
  return (
    <>
      <div className="homeBackground">
      <MovieCarousel movies={movies} />
      </div>
    </>
  );
}
