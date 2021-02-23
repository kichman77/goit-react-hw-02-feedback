import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ state, total, positivePercentage }) => {
  const { good, neutral, bad } = state;
  return (
    <>
      <ul className={styles.list}>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feedback:{" "}
          <span>{positivePercentage ? positivePercentage : "0"}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  state: PropTypes.exact({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
