import { useState } from "react";
import { MoreDetails } from "./MoreDetails";

const MovieCard = ({ poster, title, type, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (data) {
    return (
      <div id={`search${data.imdbID}`}>
        <img id='posterImg' src={poster} alt='No Poster Available'></img>
        <div id='movieInfo'>
          <div id='cardTitleRow'>
            <p id='titleText'>{title}</p>
            <p id='movieType'>{type}</p>
          </div>
          <div id='detailsBtn'>
            <label for='moreDetails'>Details</label>
            <input
              id='moreDetails'
              type='checkbox'
              onChange={(e) => setIsOpen(e.target.checked)}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Try Searching for Something</p>;
  }
};

MovieCard.defaultProps = {
  title: "Batman",
  type: "Movie",
  poster:
    "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
};

export default MovieCard;
