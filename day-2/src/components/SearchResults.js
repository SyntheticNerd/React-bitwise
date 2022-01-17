import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { getMovieDetailsById } from "./utils";

export const SearchResults = ({ data, apiId }) => {
  let searchArr = data.Search;
  const [movieArr, setMovieArr] = useState([]);

  // console.log(searchArr);

  useEffect(() => {
    const initializeSearchArr = async () => {
      let _movieArr = [];
      for (const i in searchArr) {
        let imdbID = searchArr[i].imdbID;
        let movieData = await getMovieDetailsById(apiId, imdbID);
        _movieArr.push(movieData);
        // console.log(movieData);
      }
      console.log(`_movieArr set ${_movieArr}`);
      setMovieArr(_movieArr);
      // return _movieArr
      // let data = await getMovieDetailsById(apiId);
    };
    initializeSearchArr();
    // console.log(movieArr);
  }, []);
  // console.log(movieArr);
  return (
    <div id='searchArray'>
      {movieArr.map(
        (data) => (
          //these parentheses are very important make sure you dont use curlies
          console.log("You here 2"),
          (
            <MovieCard
              poster={data.Poster}
              title={data.Title}
              type={data.Type}
              data={data}
            />
          )
        )
      )}
    </div>
  );
};
