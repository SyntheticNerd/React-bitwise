# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

State
Component Lifecycle and Effects
Conditional Rendering Rendering list

state is created inside function components

Creating state
`const [state, setState] = useState(initialState);`
Updating State
`setState(newState)`
Rendering State
`<div>{state}</div>`

state functional component

```javascript
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return <div>Current count: {count}</div>;
};
```

Working with state in class components: https://www.geeksforgeeks.org/reactjs-state-react/

When does a component re-render?

Life Cycle Documentation: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

Side effects should be performed inside a `useEffect` block
https://reactjs.org/docs/hooks-reference.html#useeffect
https://blog.logrocket.com/guide-to-react-useeffect-hook/

Life Cycle for Classes: https://programmingwithmosh.com/javascript/react-lifecycle-methods/
