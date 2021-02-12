import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import MovieCarousel from "../../Components/Carousel/index";

export default function HomePage(props) {
  const { t } = useTranslation();
  const { movies } = props;

  return (
    <>
      <h3 className="nowPlaying">{t("Playing")}:</h3>
      <div className="homeDiv">
        <img
          // eslint-disable-next-line global-require
          src={require("../../background_img/retro_movie_theater.jpg")}
          alt="background"
          className="homeImg"
        />
      </div>
      <h1 className="mainHeader">{t("Home Header")}</h1>

      <div className="carous">
        <MovieCarousel movies={movies} />
      </div>

      <div className="carous">
        <MovieCarousel movies={movies} />
      </div>

      <div className="carous">
        <MovieCarousel movies={movies} />
      </div>
    </>
  );
}
