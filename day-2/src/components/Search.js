import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
import MovieCard from "./MovieCard";

const SearchMovie = ({ onSearch }) => {
  const [apiId, setApiId] = useState("");
  const [id, setId] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [data, setData] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    let _apiId = e.target[0].value;
    let _title = e.target[1].value;
    let _id = e.target[2].value;

    let data = !_apiId
      ? alert("Must have a Valid API ID")
      : _id
      ? await getMovieDetailsById(_apiId, _id)
      : _title
      ? await getMoviesBySearchTerm(_apiId, _title)
      : alert("Must have a valid Search Value");

    console.log(data);
    setData(data);
    setTitle(data.Title);
    setType(data.Type);
    setPoster(data.Poster);
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
  };

  return (
    <>
      <form id='searchBar' onSubmit={onSubmit}>
        <div id='searchField'>
          <label>API ID</label>
          <input
            type='text'
            placeholder='API ID'
            value={apiId}
            onChange={(e) => setApiId(e.target.value)}
          />
        </div>
        <div id='searchField'>
          <label>Movie Title</label>
          <input
            type='text'
            placeholder='Title'
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div id='searchField'>
          <label>Movie ID</label>
          <input
            type='text'
            placeholder='ID'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <input type='submit' value='Search' className='btn btn-block' />
      </form>
      <MovieCard poster={poster} title={title} type={type} data={data} />
    </>
  );
};

export default SearchMovie;
