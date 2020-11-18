/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import ReactPlayer from "react-player";
import AppContext from "../../store/context";
import "./style.css";

function MovieDetails(props) {
  const { state } = useContext(AppContext);
  const { movies } = props;

  const aMovie = movies.filter(
    (element) => element.movieTitle === state.ticket.filmTitle
  );

  const displayMovieSel = () => {
    const disp = aMovie.map((movieInfo) => {
      return (
        <div className="background" key={movieInfo.id}>
          <img
            className="backgroundImgDiv"
            src={movieInfo.backgroundImg}
            alt={movieInfo.movieTitle}
          />
          <h1 className="movieTitle">{movieInfo.movieTitle}</h1>
          <div className="movieDesc">
            <ReactPlayer className="moviePoster" url={movieInfo.video} />

            <div className="descAndInfo">
              <p className="descriptionTitle">Beskrivning</p>
              <p className="description">{movieInfo.description}</p>
            </div>
          </div>
        </div>
      );
    });
    return disp;
  };

  const onClick = () => {
    
  }

  return (
    <>
      {displayMovieSel()}
      <button className="myButton ticketBtn" type="button">
        Biljetter
      </button>
    </>
  );
}

export default MovieDetails;

{
  /* <img
className="moviePoster"
src={movieInfo.img}
alt={movieInfo.img}
/> */
}

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/Zn_qirpdBag" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
