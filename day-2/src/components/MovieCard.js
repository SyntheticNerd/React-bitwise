import { useState } from "react";
import { MoreDetails } from "./MoreDetails";

const MovieCard = ({ poster, title, type, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (data.Title) {
    return (
      <div>
        <img src={poster} alt='No Poster Available'></img>
        <p>{title}</p>
        <div>
          <p>{type}</p>
        </div>
        <label for='moreDetails'>More Details</label>
        <input
          id='moreDetails'
          type='checkbox'
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <MoreDetails data={data} isOpen={isOpen} />
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
