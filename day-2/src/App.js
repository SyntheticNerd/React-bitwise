import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchMovie from "./components/Form";
import { getMoviesBySearchTerm } from "./components/utils";
import { getMoviesById } from "./components/utils";

function App() {
  return (
    <>
      <SearchMovie />
      <MovieCard />
    </>
  );
}

export default App;
