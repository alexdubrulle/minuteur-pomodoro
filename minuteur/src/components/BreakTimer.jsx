import { useState } from "react";

function BreakTimer() {
  const [breakTime] = useState(5 * 60);

  const formatBreakTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <button type="button" className="timerBreak" disabled>
      {formatBreakTime(breakTime)}
    </button>
  );
}

export default BreakTimer;
