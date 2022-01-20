import { useState, useEffect } from "react";

export const DetailsMenu = ({ data }) => {
  const {
    Title,
    Year,
    // Rated,
    // Released,
    // Runtime,
    // Genre,
    // Director,
    // Writer,
    // Actors,
    Plot,
    // Language,
    // BoxOffice,
    Poster,
  } = data;

  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      <img src={Poster} alt='No Poster' />
      <div>
        <p>{Title}</p>
        <p>{Year}</p>
      </div>
    </div>
  );
};
