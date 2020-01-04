import React, { Fragment, useEffect, useState } from "react";
import LaunchesController from "./LaunchesInterface/LaunchesController";
import LaunchesHeading from "./LaunchesInterface/LaunchesHeading";
import LaunchItem from "./LaunchesInterface/LaunchItem";
import getItemDetails from "../Methods/getItemDetails";

import "../../scss/components/launchesinterface.css";

const LaunchesInterface = () => {
  const [items, updateItems] = useState([]);
  const [loadingText, updateLoadingText] = useState("Loading Launches List...");
  useEffect(getLaunchData, []);

  return (
    <Fragment>
      <LaunchesController
        refreshAction={updateLaunches}
        hasItems={items.length > 0}
      />
      <LaunchesHeading />
      <section className="website-launches-interface__launch-items-container">
        {items.length < 1 ? (
          <div className="website-launches-interface__loading">
            {loadingText}
          </div>
        ) : (
          items.map(item => {
            const launchData = getItemDetails(item);
            return <LaunchItem data={launchData} key={launchData.id} />;
          })
        )}
      </section>
    </Fragment>
  );

  function getLaunchData() {
    try {
      fetch("https://api.spacexdata.com/v2/launches")
        .then(res => res.json())
        .then(result => {
          updateItems(result);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function updateLaunches(event) {
    const button = event.currentTarget;
    button.classList.add("refreshing");
    button.addEventListener(
      "animationend",
      () => {
        button.classList.remove("refreshing");
      },
      { once: true }
    );

    updateItems([]);
    updateLoadingText("Refreshing Launches List...");
    getLaunchData();
  }
};

export default LaunchesInterface;
