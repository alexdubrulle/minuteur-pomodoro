import { useState, useEffect } from "react";
import "./App.css";
import pomodoro from "./assets/pomodoro.png";
import Work from "./components/Work";
import StartButton from "./components/Start";
import ResetButton from "./components/ResetButon"; // Importez le composant ResetButton

function App() {
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(25 * 60);
  const [shortTimerActive, setShortTimerActive] = useState(false);

  const resetTime = (time) => {
    setCurrentTime(time);
  };

  const startShortTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setCurrentTime(5 * 60); // Réglez le temps à 5 minutes en secondes
      setShortTimerActive(true);
    }
  };

  const resetTimers = () => {
    setIsActive(false);
    setCurrentTime(25 * 60);
    setShortTimerActive(false);
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
        {shortTimerActive ? (
          <p className="socialPause">C'est l'heure du café</p>
        ) : (
          <button className="shortTimer" onClick={startShortTimer}>
            05:00
          </button>
        )}
        <ResetButton resetTimers={resetTimers} />{" "}
        {/* Utilisez le composant ResetButton */}
      </div>
      <StartButton setIsActive={setIsActive} isActive={isActive} />
    </>
  );
}

export default App;
