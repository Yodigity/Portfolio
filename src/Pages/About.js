import React from "react";
import { ProfileInfo } from "../Components/ProfileIntro/ProfileIntro";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";
import { PageWrapper } from "../Components/PageWrapper";
import { ProjectPreview } from "./ProjectPreview";

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
