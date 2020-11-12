/* eslint-disable no-unused-expressions */
import React from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MovieCarousel(props) {
  const { movies } = props;

  let movieArray = () => {
    if (movies.length === 0) {
      return <div></div>;
    }
    return movies.map((element, index) => {
      return (
        <div className="imageDiv">
          <img src={element.img} alt={element.movieTitle} className="movieImage"/>
          <p className="aLegend">{element.movieTitle}</p>
        </div>
      );
    });
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
    <Carousel
      swipeable={false}
      draggable={false}
      showDots
      responsive={responsive}
      ssr // means to render carousel on server-side.
      infinite
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
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
  );
}

// function MovieCarousel(props) {
//   const { movies } = props;

//   let movieArray = () => {
//     if (movies.length === 0) {
//       return <div></div>;
//     }
//     return movies.map((element, index) => {
//       return (
//         <div>
//           <img src={element.img} alt={element.movieTitle} />
//           <p className="aLegend">{element.movieTitle}</p>
//         </div>
//       );
//     });
//   };
//   return (
// );
// }

export default MovieCarousel;
// {movieArray()}
