import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
const MovieCard = ({ poster, title, type }) => {
  return (
    <div>
      <img src={poster}></img>
      <p>{title}</p>
      <div>
        <p>{type}</p>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  title: "Batman",
  type: "Movie",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
};

export default MovieCard;
