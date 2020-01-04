import React from "react";

import "../../scss/components/heading.css";

const Heading = ({ title }) => {
  return (
    <div className="website-heading">
      <h1 className="website-heading__title">{title}</h1>
    </div>
  );
};

Heading.defaultProps = {
  title: "SpaceX Launches"
};

export default Heading;
