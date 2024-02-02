//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0); // this is a hook
  return (
    <div className="App">
      <button onClick = {() => setCounter(counter + 1)}>+</button>
      <h1>There {Math.abs(counter) === 1 ? "is" : "are"} {counter} {Math.abs(counter) === 1 ? "way" : "ways"} to skin a cat...?</h1>
      <button onClick = {() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default App;
