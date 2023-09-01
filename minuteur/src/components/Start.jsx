import { useEffect } from "react";
import PropTypes from "prop-types";

const StartButton = ({ setIsActive, isActive }) => {
  const handleStartClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {}, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div>
      <button type="button" onClick={handleStartClick}>
        {isActive ? "Pause" : "Start"}
      </button>
    </div>
  );
};

StartButton.propTypes = {
  setIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default StartButton;
