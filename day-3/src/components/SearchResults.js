import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { getMovieDetailsById } from "./utils";
import { DetailsMenu } from "./DetailsMenu";

const searchArrayStyle = {
  display: "flex",
  overflow: "hidden",
  width: "90vw",
  // flexWrap: "wrap",
};

const detailsClicked = (data) => {};

export const SearchResults = ({ searchData, searchString, setError }) => {
  let searchArr = [];
  const [clickedDetails, setClickedDetails] = useState({});
  const [detailsOpen, setDetailsOpen] = useState(false);
  if (searchData.Response === "True") {
    searchArr = searchData.Search;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{ padding: "32px" }}>Search Results for: {searchString}</p>
      <div id='searchArray' style={searchArrayStyle}>
        {searchArr.map((data) => (
          //these parentheses are very important make sure you dont use curlies
          <MovieCard
            key={data.imdbID}
            poster={data.Poster}
            title={data.Title}
            type={data.Type}
            data={data}
            setClickedDetails={setClickedDetails}
            setError={setError}
          />
        ))}
      </div>
      {clickedDetails.Response === "True" ? (
        <DetailsMenu data={clickedDetails} />
      ) : (
        <></>
      )}
    </div>
  );
};
