import React from "react";
import { ProfileIntro } from "../Components/ProfileIntro/ProfileIntro";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";
import { PageWrapper } from "../Components/PageWrapper";

export const About = () => {
  return (
    <PageWrapper>
      <div className='profile-content'>
        <BackArrow prev='/contact' />
        <ProfileIntro />
        <ForwardArrow next='/portfolio' />
      </div>
    </PageWrapper>
  );
};
