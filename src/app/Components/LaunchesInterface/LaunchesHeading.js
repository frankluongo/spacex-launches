import React from "react";

import "../../../scss/components/launchesheading.css";
import TableHeading from "../TableHeading";

const LaunchesHeading = () => {
  const headings = [
    "Badge",
    "Rocket Name",
    "Rocket Type",
    "Launch Date",
    "Details",
    "ID",
    "Article"
  ];
  return (
    <section className="website-launches-heading website-item-grid">
      {headings.map(title => (
        <TableHeading title={title} key={title} />
      ))}
    </section>
  );
};

export default LaunchesHeading;
