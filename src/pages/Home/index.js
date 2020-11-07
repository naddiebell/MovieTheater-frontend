import React from "react";
import MovieCarousel from "../../Components/Carousel/index"

export default function HomePage(props) {
  const { movies } = props;
  return (
    <>
      <MovieCarousel movies={movies} />
    </>
  );
}
