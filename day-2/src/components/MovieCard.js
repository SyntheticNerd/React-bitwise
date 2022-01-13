import PropTypes from "prop-types";

const MovieCard = ({ title, type, posterUrl }) => {
  return (
    <div>
      <img src={posterUrl}></img>
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
