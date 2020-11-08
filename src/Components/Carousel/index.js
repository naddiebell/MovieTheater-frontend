/* eslint-disable no-unused-expressions */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";

function MovieCarousel(props) {
  const { movies } = props;

  let movieArray = () => {
    if (movies.length === 0) {
      return <div></div>;
    }
    return movies.map((element, index) => {
      return (
        <div>
          <img src={element.img} alt={element.movieTitle} />
          <p className="aLegend">{element.movieTitle}</p>
        </div>
      );
    });
  };
  return (
    <Carousel className="movieCarousel" renderThumbs={() => []}>
      {movieArray()}
    </Carousel>
  );
}

export default MovieCarousel;
