import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
const MovieCard = () => {
  let [tempMovie, setTempMovie] = useState([]);

  useEffect(async () => {
    let tempData = await getMovieDetailsById("b8b4d73a", "tt3896198");
    setTempMovie(tempData);
  }, []);

  let poster = tempMovie.Poster;
  let title = tempMovie.Title;
  let type = tempMovie.Type;

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
  posterUrl:
    "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
};

export default MovieCard;
