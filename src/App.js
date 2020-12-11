import {useState, useRef} from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [incrementByOne, setIncrementByOne] = useState(0);
  const [decrementByOne, setDecrementByOne] = useState(0);
  const countRef = useRef(null);

  const handleStartTimer = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  };

  const handleStop = () => {
    setIsStopped(true);
    clearInterval(countRef.current);
  };
  
  const handleReset = () => {
    clearInterval(countRef.current);
    setIsStopped(true);
    setIsActive(true);
    setTimer(0);
  }

  const handleIncrement = () => {
    setIncrementByOne(incrementByOne + 1);
  }

  return (
    <div className="App">
      <h1>Stopwatch with Redux</h1>
      <h1>00:00:{timer}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleStartTimer}>Start</button>
      <button onClick={handleStop}>Stop</button> 
      <button>Lap</button>
      <button onClick={handleReset}>Reset</button>
      <button>-</button>
    </div>
  );
}

export default App;
