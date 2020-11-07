/* eslint-disable no-unused-expressions */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
          <p className="legend">Legend {index + 1}</p>
        </div>
      );
    });
  };
  return <Carousel>{movieArray()}</Carousel>;
}

export default MovieCarousel;


