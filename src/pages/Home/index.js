/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import MovieCarousel from "../../Components/Carousel/index";

export default function HomePage(props) {
  const { t } = useTranslation();
  const { movies } = props;

  const nowPlaying = (array, movieCategory ) => {
    if (array === undefined) {
      return;
    }
    const currentMovies = array.slice().filter((aMovie) => {
      return aMovie.category.includes(movieCategory);
    });
    return currentMovies;
  };

  return (
    <>
      {/* <h3 className="nowPlaying">{t("Playing")}:</h3> */}
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
        <h3 className="nowPlaying">{t("Playing")}:</h3>
        <MovieCarousel movies={nowPlaying(movies, "now")} />
      </div>

      <div className="carous">
        <h3>{t("American Movies")}:</h3>
        <MovieCarousel movies={nowPlaying(movies, "classic")} />
      </div>

      <div className="carous">
        <h3>{t("Family Movies")}:</h3>
        <MovieCarousel movies={nowPlaying(movies, "children")} />
      </div>
    </>
  );
}
