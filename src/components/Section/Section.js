import React from "react";
import PropTypes from "prop-types";

const style = {
  title: {
    margin: "20px 0",
    fontSize: "2rem",
  },
};
const Section = ({ title, children }) => {
  return (
    <>
      <h2 style={style.title}>{title}</h2>
      {children}
    </>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
