import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchMovie from "./components/Form";
import { getMoviesBySearchTerm } from "./components/utils";
import { getMoviesById } from "./components/utils";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
      <SearchMovie />
      <HomePage />
    </>
  );
}

export default App;
