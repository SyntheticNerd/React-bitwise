# React Course By Bitwise

## Contents

- [Day-1](#day1)

# <a name="day1"></a>Day 1

### **Reviewing the Basics**(Non-Comprehensive)

- [Object/Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment): Extract multiple properties in one statement, can access properties from nested objects, and can set a default value if the property doesn't exist.

_Arrays_

```javascript
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // expected output: 10
console.log(b); // expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // expected output: Array [30,40,50]
```

_Objects_

```javascript
const user = {
  id: 42,
  isVerified: true,
};
const { id, isVerified } = user;
console.log(id); // 42
console.log(isVerified); // true
```

- [Async/Await](https://javascript.info/async-await): you can make arrow functions async by placing the async before the parentheses. `let functionName = async()=>{}`. Don't forget to include `await` each time you are working with the promise data especially when ity is converted to JSON.

### **In Class Challenge**

- Write an arrow function called `getMoviesBySearchTerm` that takes a search string as input and uses `fetch` and `async/await` to get an array of movies with a matching title from OMDb API.

- Write another arrow function called `getMovieDetailsById` that takes a valid OMDb movie id as input and uses `fetch` and `async/await` to get an object of detailed information about the specified movie.

```javascript
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
```

[Day 1 Challenge Sand Box](https://codesandbox.io/s/day1-bitwise-in-class-8k6f6)

### **Take Home Challenge**

- Create a Git repository and initialize a React app inside it `create-react-app`

```bash
npx create-react-app [App Name]
```

- Inside the `src/` folder, create a file called `utils.js`. Copy the functions from your In Class Challenge into `utils.js` and `export` the functions so they can be imported and used in other files.

```javascript
export default getMoviesBySearchTerm;
export default getMovieDetailsById;
```

[Check out the Git Hub Here](https://github.com/SyntheticDesigner/React-bitwise/tree/main/day-1)
