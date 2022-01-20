import { useState } from "react";
import { getMovieDetailsById } from "./utils";
import { getApiId } from "./variables";

let movieCardStyle = {
  display: "block",
  height: "500px",
  width: "300px",
  margin: "32px",
};
let posterStyle = {
  height: "50%",
  width: "auto",
};
let briefStyle = {};

const MovieCard = ({
  poster,
  title,
  type,
  data,
  setClickedDetails,
  setError,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [oldData, setOldData] = useState({});

  if (data) {
    const openDetails = async (data) => {
      let detailData = await getMovieDetailsById(getApiId(), data.imdbID);
      if (detailData.Response === "True") {
        setClickedDetails(detailData);
        // console.log(detailData);
      } else {
        setError(detailData.Error);
      }
    };
    return (
      <div id={`search${data.imdbID}`} style={movieCardStyle}>
        <img
          id='posterImg'
          style={posterStyle}
          src={poster}
          alt='No Poster Available'
        ></img>
        <div id='movieInfo' style={briefStyle}>
          <div id='cardTitleRow'>
            <p id='titleText'>{title}</p>
            <p id='movieType'>{type}</p>
          </div>
          <div id='detailsBtn'>
            <input
              value='Details'
              id='moreDetails'
              type='button'
              onClick={() => {
                openDetails(data);
              }}
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
