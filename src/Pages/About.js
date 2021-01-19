import React from "react";
import { ProfileInfo } from "../Components/ProfileIntro/ProfileInfo";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";
import { PageWrapper } from "../Components/PageWrapper";

export const About = () => {
  return (
    <PageWrapper>
      <BackArrow prev='/contact' />
      <div className='profile-content'>
        <ProfileInfo />
      </div>
      <ForwardArrow next='/portfolio' />
    </PageWrapper>
  );
};
