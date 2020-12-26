import React from "react";
import "./PortfolioWindow.scss";

export const TechPill = (props) => {
  const { tech } = props;
  return (
    <div>
      <h1 className='tech-pill'>{tech}</h1>
    </div>
  );
};
