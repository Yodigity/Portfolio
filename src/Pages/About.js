import React from "react";
import { ProfileIntro } from "../Components/ProfileIntro/ProfileIntro";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";

export const About = () => {
  return (
    <div style={{ display: "flex" }}>
      <BackArrow />
      <div className='profile-content'>
        <ProfileIntro />
      </div>
      <ForwardArrow />
    </div>
  );
};
