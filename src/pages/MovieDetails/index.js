/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "@reach/router";
import Carousel from "react-multi-carousel";
import AppContext from "../../store/context";
import "./style.css";
import "react-multi-carousel/lib/styles.css";

function MovieDetails(props) {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const { state } = useContext(AppContext);
  const { movies } = props;

  const aMovie = movies.filter(
    (element) => element.movieTitle === state.ticket.filmTitle
  );

  const handleClick = () => {
    navigate("/biljetter");
  };

  const handleImgClick = (movieInfo) => {
    dispatch({ type: "setMovieTitle", data: movieInfo.movieTitle });
    navigate("/filmer");
  };

  const displayMovieSel = () => {
    const disp = aMovie.map((movieInfo) => {
      return (
        <>
          <div className="background" key={movieInfo.id}>
            <img
              className="backgroundImg"
              src={movieInfo.backgroundImg}
              alt={movieInfo.movieTitle}
            />
          </div>

          <h1 className="movieTitle">{movieInfo.movieTitle}</h1>
          <div className="movieDesc">
            <ReactPlayer className="moviePoster" url={movieInfo.video} />

            <div className="descAndInfo">
              <h3 className="descriptionTitle">Beskrivning</h3>
              <p className="description">{movieInfo.description}</p>
              <button
                className="myButton filmBtn"
                type="button"
                onClick={() => handleClick()}
              >
                Biljetter
              </button>
            </div>
          </div>
        </>
      );
    });
    return disp;
  };

  const movieArray = () => {
    if (movies.length === 0) {
      return <div />;
    }
    return movies.map((element) => {
      return (
        <div
          className="imageDiv"
          key={element.id}
          onClick={() => handleImgClick(element)}
        >
          <img
            src={element.img}
            alt={element.movieTitle}
            className="movieImage"
          />
        </div>
      );
    });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
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
    <>
      {displayMovieSel()}
      <div className="movieCarDiv">
        <Carousel
          movies={movies}
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
        >
          {movieArray()}
        </Carousel>
      </div>
    </>
  );
}

export default MovieDetails;

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zn_qirpdBag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
/* <div className="movieCarDiv">
        <MovieCarousel className="carImages" movies={movies} showText="false"/>
      </div> */
