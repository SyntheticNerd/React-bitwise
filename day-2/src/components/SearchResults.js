import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { getMovieDetailsById } from "./utils";

const searchArrayStyle = {
  display: "flex",
  overflow: "hidden",
  width: "90vw",
  // flexWrap: "wrap",
};

export const SearchResults = ({ searchData, searchString }) => {
  let searchArr = [];
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
      <p style={{ paddingLeft: "32px" }}>Search Results for: {searchString}</p>
      <div id='searchArray' style={searchArrayStyle}>
        {searchArr.map((data) => (
          //these parentheses are very important make sure you dont use curlies
          <MovieCard
            poster={data.Poster}
            title={data.Title}
            type={data.Type}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};
