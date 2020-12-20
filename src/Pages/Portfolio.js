import React from "react";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";

export const Portfolio = () => {
  return (
    <div>
      <BackArrow prev='/' />
      <h1>Portfolio</h1>
      <ForwardArrow next='/contact' />
    </div>
  );
};
