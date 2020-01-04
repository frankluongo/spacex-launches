import React from "react";

const Container = ({ children, modifers }) => {
  return (
    <section className={`website-container ${modifers}`}>{children}</section>
  );
};

Container.defaultProps = {
  children: "Content",
  modifers: ""
};

export default Container;
