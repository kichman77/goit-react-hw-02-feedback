import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button className={styles.btn} onClick={onLeaveFeedback} type="button" name="good">
        Good
      </button>
      <button className={styles.btn} onClick={onLeaveFeedback} type="button" name="neutral">
        Neutral
      </button>
      <button className={styles.btn} onClick={onLeaveFeedback} type="button" name="bad">
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
