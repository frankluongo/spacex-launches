import React from "react";

import "../../../scss/components/launchitem.css";
import LinkIcon from "../../Icons/LinkIcon";

const LaunchItem = ({ data }) => {
  const {
    badge,
    rocketName,
    rocketType,
    launchDate,
    details,
    id,
    article,
    hasReused,
    hasWithReddit,
    launchSuccess
  } = data;

  return (
    <div
      className="website-launch-item website-item-grid"
      data-launchitem
      data-launchsuccess={launchSuccess}
      data-hasreused={hasReused}
      data-withreddit={hasWithReddit}
    >
      <figure
        className="website-launch-item__badge"
        style={{ backgroundImage: `url(${badge})` }}
      />
      <div>{rocketName}</div>
      <div>{rocketType}</div>
      <div>{launchDate}</div>
      <div>{details}</div>
      <div className="text-align-center">{id}</div>
      <a
        className="website-launch-item__link"
        aria-label="External Link"
        href={article}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkIcon modifiers="website-launch-item-link__icon" />
      </a>
    </div>
  );
};

LaunchItem.defaultProps = {
  data: {
    badge: "https://picsum.photos/200/200",
    rocketName: "Falcon 1",
    rocketType: "Merlin A",
    launchDate: "03/25/2005",
    details: "Engine failure at 33 seconds and loss of vehicle",
    id: "1",
    article: "https://google.com",
    hasReused: false,
    withReddit: {},
    launchSuccess: true
  }
};
export default LaunchItem;
