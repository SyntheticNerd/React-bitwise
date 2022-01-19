import "./App.css";
import Search from "./components/Search";
import LogIn from "./components/LogIn";
import { SearchResults } from "./components/SearchResults";
import { useState, useEffect } from "react";
import { getApiId } from "./components/variables";

function App() {
  const [login, setLogin] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [searchString, setSearchString] = useState("");

  return (
    <>
      {/*--------------Login Screen--------------------*/}
      {!login ? (
        <LogIn setLogin={setLogin} />
      ) : (
        <Search
          setSearching={setSearching}
          setSearchData={setSearchData}
          setSearchString={setSearchString}
        />
      )}
      {/*--------------Display Search Results--------------------*/}
      {searching ? (
        <SearchResults searchData={searchData} searchString={searchString} />
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
