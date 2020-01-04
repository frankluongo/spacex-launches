import React from "react";
import Refresh from "../Icons/Refresh";

import "../../scss/components/refreshbutton.css";

const RefreshButton = ({ action, label, modifiers }) => {
  return (
    <button
      aria-label={label}
      className={`button refresh-button ${modifiers}`}
      onClick={action}
    >
      <Refresh modifiers="refresh-button__refresh-icon" />
    </button>
  );
};

RefreshButton.defaultProps = {
  action: () => {
    console.log("clicked");
  },
  label: "Refresh SpaceX Launches List",
  modifiers: ""
};

export default RefreshButton;
