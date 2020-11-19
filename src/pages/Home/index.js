import React from "react";
import "./style.css";
import MovieCarousel from "../../Components/Carousel/index";

export default function HomePage(props) {
  const { movies } = props;

  return (
    <>
      <div className="homeDiv">
        <img
          // eslint-disable-next-line global-require
          src={require("../../background_img/retro_movie_theater.jpg")}
          alt="background"
          className="homeImg"
        />
      </div>

      <div className="carous">
        <MovieCarousel movies={movies} />
      </div>
    </>
  );
}
