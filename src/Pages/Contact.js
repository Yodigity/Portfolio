import React from "react";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";

export const Contact = () => {
  return (
    <div>
      <BackArrow prev='/portfolio' />
      <h1>Contact</h1>
      <ForwardArrow next='/' />
    </div>
  );
};
