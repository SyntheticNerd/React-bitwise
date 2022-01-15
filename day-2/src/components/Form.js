import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getMovieDetailsById } from "./utils";
import { getMoviesBySearchTerm } from "./utils";
import { onSubmit } from "./utils";

const SearchMovie = ({ onSearch }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [apiId, setApiId] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>API ID</label>
        <input
          type='text'
          placeholder='API ID'
          value={apiId}
          onChange={(e) => setApiId(e.target.value)}
        />
      </div>
      <div>
        <label>Movie Title</label>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
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
  );
};

export default SearchMovie;
