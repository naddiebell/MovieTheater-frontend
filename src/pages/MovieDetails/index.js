/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "@reach/router";
import AppContext from "../../store/context";
import "./style.css";
import MovieCarousel from "../../Components/Carousel/index";

function MovieDetails(props) {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const { movies } = props;

  const aMovie = movies.filter(
    (element) => element.movieTitle === state.ticket.filmTitle
  );

  const handleClick = () => {
    navigate("/biljetter");
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
              <p className="descriptionTitle">Beskrivning</p>
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



  return (
    <>
      {displayMovieSel()}
      {/* <div className="movieCarDiv">
        <MovieCarousel className="carImages" movies={movies} />
      </div> */}
    </>
  );
}

export default MovieDetails;

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zn_qirpdBag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
