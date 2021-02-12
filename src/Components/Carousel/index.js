/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
import React, { useContext } from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "@reach/router";
import AppContext from "../../store/context";

function MovieCarousel(props) {
  const { dispatch } = useContext(AppContext);

  const { movies } = props;
  const navigate = useNavigate();

  const handleClick = (movieInfo) => {
    dispatch({ type: "setMovieTitle", data: movieInfo.movieTitle });
    navigate("/filmer");
  };

  const movieArray = () => {
    if (movies.length === 0) {
      // eslint-disable-next-line react/self-closing-comp
      return <div></div>;
    }
    return movies.map((element) => {
      return (
        <div
          className="imageDiv"
          onClick={() => handleClick(element)}
          key={element.id}
        >
          <img
            src={element.img}
            alt={element.movieTitle}
            className="movieImage"
          />
          <p className="aLegend">{element.movieTitle}</p>
        </div>
      );
    });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={2000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      data-testid="carousel"
    >
      {movieArray()}
    </Carousel>
  );
}
export default MovieCarousel;
