import { useState } from "react";

const SearchMovie = ({ onSearch }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [apiId, setApiId] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch({ id, title, apiId });

    setId("");
    setTitle("");
    setApiId("");
  };

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
