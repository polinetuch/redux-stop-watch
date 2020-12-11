import {useState, useRef} from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const countRef = useRef(null);

  const handleStartTimer = () => {
    setIsActive(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  };

  const handleStop = () => {
    setIsStopped(true)
    clearInterval(countRef.current)
  };
  
  return (
    <div className="App">
      <h1>Stopwatch with Redux</h1>
      <h1>00:00:{timer}</h1>
      <button>+</button>
      <button onClick={handleStartTimer}>Start</button>
      <button onClick={handleStop}>Stop</button> 
      <button>Lap</button>
      <button>Reset</button>
      <button>-</button>
    </div>
  );
}

export default App;
