import React from "react";
import PropTypes from "prop-types";

const ResetButton = ({ resetTimers }) => {
  const handleResetClick = () => {
    resetTimers();
  };

  return (
    <button type="button" className="reset" onClick={handleResetClick}>
      Reset
    </button>
  );
};

ResetButton.propTypes = {
  resetTimers: PropTypes.func.isRequired,
};

export default ResetButton;
