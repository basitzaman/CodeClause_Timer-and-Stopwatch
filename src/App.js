import logo from "./logo.svg";
import "./App.css";
import TimerView from "./Components/TimerView";
import Stopwatch from './Components/index.js'


function App() {
  return (
    <div className="App">
      <section><TimerView /></section>
      <section><Stopwatch /></section>
      
      
      
    </div>
  );
}

export default App;
