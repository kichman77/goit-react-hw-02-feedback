import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ state, total, positivePercentage }) => {
  const { good, neutral, bad } = state;
  return (
    <>
      <ul>
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
  state: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
