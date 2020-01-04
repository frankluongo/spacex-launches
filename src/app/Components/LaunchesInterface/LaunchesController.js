import React from "react";

import "../../../scss/components/launchescontroller.css";
import RefreshButton from "../RefreshButton";
import Filter from "../Filter";

const LaunchesController = ({ refreshAction, hasItems }) => {
  let activeFilters = [];

  return (
    <section className="website-launches-controller">
      <div className="website-launches-controller__content">
        <RefreshButton action={refreshAction} />
        <div className="website-launches-controller-content__filters">
          <Filter
            filterAction={handleFilterCheck}
            name="launchsuccess"
            isDisabled={!hasItems}
          />
          <Filter
            filterAction={handleFilterCheck}
            name="hasreused"
            value="Reused"
            isDisabled={!hasItems}
          />
          <Filter
            filterAction={handleFilterCheck}
            name="withreddit"
            value="With Reddit"
            isDisabled={!hasItems}
          />
        </div>
      </div>
    </section>
  );

  function handleFilterCheck(event) {
    const filter = event.currentTarget;
    if (filter.checked) {
      activeFilters = [...activeFilters, filter.name];
    } else {
      activeFilters = activeFilters.filter(item => item !== filter.name);
    }
    filterList();
  }

  function filterList() {
    const items = document.querySelectorAll("[data-launchitem]");
    items.forEach(item => {
      const isInFilter = activeFilters.every(filter => {
        return item.dataset[filter] === "true";
      });
      item.setAttribute("aria-hidden", !isInFilter);
    });
  }
};

export default LaunchesController;
