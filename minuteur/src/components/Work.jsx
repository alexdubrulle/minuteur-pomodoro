import { useEffect } from "react";
import PropTypes from "prop-types";

function Work({ currentTime, resetTime }) {
  useEffect(() => {
    if (currentTime === 0) {
      resetTime(25 * 60); // Réinitialisez le temps à 25 minutes en secondes
    }
  }, [currentTime, resetTime]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <button type="button" className="timer" disabled>
      {formatTime(currentTime)}
    </button>
  );
}

Work.propTypes = {
  currentTime: PropTypes.number.isRequired,
  resetTime: PropTypes.func.isRequired,
};

export default Work;
