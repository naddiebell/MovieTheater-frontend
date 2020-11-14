import React from "react";
import "./style.css";
import MovieCarousel from "../../Components/Carousel/index";

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

