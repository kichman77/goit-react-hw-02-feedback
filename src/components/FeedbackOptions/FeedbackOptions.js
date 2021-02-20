import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button onClick={onLeaveFeedback} type="button" name="good">
        Good
      </button>
      <button onClick={onLeaveFeedback} type="button" name="neutral">
        Neutral
      </button>
      <button onClick={onLeaveFeedback} type="button" name="bad">
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
