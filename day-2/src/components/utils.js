// import "./styles.css";
const url = new URL("https://www.omdbapi.com");

const movieArray = [];

////-------------------------------------------Using promises and .then

// let getMoviesBySearchTerm = (myKey, title) => {
//   let url = `https://www.omdbapi.com/?apikey=${myKey}&t=${title}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       app.innerHTML = data.Title;
//     })
//     .catch((er) => console.log(er, url));
// };

//-----------------------------------------------Using Async and Await

const fetchJSON = async (url) => {
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.clear.log(err));
  return response;
};

export const getMoviesBySearchTerm = (myKey, title) => {
  let url = `https://www.omdbapi.com/?apikey=${myKey}&t=${title}`;
  return fetchJSON(url);
};

export const getMovieDetailsById = (myKey, id) => {
  let url = `https://www.omdbapi.com/?apikey=${myKey}&i=${id}`;
  return fetchJSON(url);
};

export const getMovies = () => {
  return movieArray;
};

export const onSubmit = async (e) => {
  e.preventDefault();
  let _apiId = e.target[0].value;
  let _title = e.target[1].value;
  let _id = e.target[2].value;

  let data = !_apiId
    ? alert("Must have a Valid API ID")
    : _id
    ? await getMovieDetailsById(_apiId, _id)
    : _title
    ? await getMoviesBySearchTerm(_apiId, _title)
    : alert("Must have a valid Search Value");

  movieArray.push(data);
  console.log(movieArray);

  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
};
