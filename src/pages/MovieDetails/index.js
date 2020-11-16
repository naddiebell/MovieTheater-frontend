// /* eslint-disable no-unused-expressions */
// /* eslint-disable array-callback-return */
// import React, { useContext } from "react";
// import AppContext from "../../store/context";

// function MovieDetails(props) {
//   const { state } = useContext(AppContext);
//   const { movies } = props;

//   const aMovie = movies.filter(
//     (element) => element.movieTitle === state.ticket.filmTitle
//   );

//   const displayMovieSel = () => {
//     const disp = aMovie.map((movieInfo) => {
//        <div>{movieInfo.movieTitle}</div>;
//     });
    
//   };

//   displayMovieSel();

//   console.log(aMovie);

//   console.log("staaattteee from moviedetails", state.ticket);
//   return (
//     { displayMovieSel() });
// }

// export default MovieDetails;
