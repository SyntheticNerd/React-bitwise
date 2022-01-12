// import "./styles.css";

let app = document.getElementById("app");
let form1 = document.querySelector("#form1");
const url = new URL("https://www.omdbapi.com");

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

let getMoviesBySearchTerm = async (myKey, title) => {
  url.searchParams.append("apikey", myKey);
  url.searchParams.append("t", title);
  let response = await fetch(url);
  let data = await response.json();
  let string = JSON.stringify(data);
  app.innerHTML = string;
  // return data;
};

let getMovieDetailsById = async (myKey, id) => {
  url.searchParams.append("apikey", myKey);
  url.searchParams.append("i", id);
  let response = await fetch(url);
  let data = await response.json();
  let string = JSON.stringify(data);
  app.innerHTML = string;
  // return data;
};

function load(event) {
  event.preventDefault();
  let key = event.target[0].value;
  let title = event.target[1].value;
  let id = event.target[2].value;
  id ? getMovieDetailsById(key, id) : getMoviesBySearchTerm(key, title);
}

form1.addEventListener("submit", (event) => {
  load(event);
});
