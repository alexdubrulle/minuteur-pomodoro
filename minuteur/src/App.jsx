import { useState, useEffect } from "react";
import "./App.css";
import pomodoro from "./assets/pomodoro.png";
import Work from "./components/Work";
import BreakTimer from "./components/BreakTimer";
import StartButton from "./components/Start";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60); // Temps de pause en secondes

  const resetTime = (time) => {
    setCurrentTime(time);
  };

  useEffect(() => {
    let interval;

    if (isActive && currentTime > 0) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, currentTime]);

  return (
    <>
      <h1>Compte à rebours pomodoro</h1>
      <img className="pomodoro" src={pomodoro} alt="Pomodoro" />

      <div className="buttons">
        <Work currentTime={currentTime} resetTime={resetTime} />
        <BreakTimer breakTime={breakTime} resetTime={setBreakTime} />
      </div>
      <StartButton setIsActive={setIsActive} isActive={isActive} />
    </>
  );
}

export default App;
