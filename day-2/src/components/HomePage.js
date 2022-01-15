import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
import MovieCard from "./MovieCard";

export const HomePage = () => {
  let [tempMovie, setTempMovie] = useState([]);

  useEffect(async () => {
    let tempData = await getMovieDetailsById("YOUR ID HERE", "tt3896198");
    setTempMovie(tempData);
  }, []);

  return (
    <MovieCard
      poster={tempMovie.Poster}
      title={tempMovie.Title}
      type={tempMovie.Type}
    />
  );
};
