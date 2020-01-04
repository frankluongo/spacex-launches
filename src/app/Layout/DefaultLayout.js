import React from "react";

import "../../scss/layout/defaultlayout.css";
import Image from "../../assets/images/background.jpg";

const DefaultLayout = ({ bgImg, children }) => {
  return (
    <main
      className="website-default-layout"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </main>
  );
};

DefaultLayout.defaultProps = {
  bgImg: Image,
  children: "Content"
};

export default DefaultLayout;
