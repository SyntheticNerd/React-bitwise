let app = document.getElementById("app");
let form1 = document.querySelector("#form1");

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
  let url = `https://www.omdbapi.com/?apikey=${myKey}&t=${title}`;
  let response = await fetch(url);
  let data = await response.json();
  let string = JSON.stringify(data);
  app.innerHTML = string;
};

function load(event) {
  event.preventDefault();
  let key = event.target[0].value;
  let title = event.target[1].value;
  console.log(title);
  getMoviesBySearchTerm(key, title);
}

form1.addEventListener("submit", (event) => {
  load(event);
});
