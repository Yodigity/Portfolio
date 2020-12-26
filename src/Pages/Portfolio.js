import React from "react";
import DaisyDrawsGallery from "../Components/Portfolio/Images/DaisyDrawsGallery.jpg";
import DaisyDrawsAbout from "../Components/Portfolio/Images/DaisyDrawsAbout.jpg";
import EToEStandard from "../Components/Portfolio/Images/EToEStandard.jpg";
import EToEHover from "../Components/Portfolio/Images/EToEHover.jpg";
import ResortStandard from "../Components/Portfolio/Images/ResortStandard.jpg";
import ResortHover from "../Components/Portfolio/Images/ResortHover.jpg";
import ExpenseStandard from "../Components/Portfolio/Images/ExpenseStandard.jpg";
import ExpenseHover from "../Components/Portfolio/Images/ExpenseHover.jpg";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";
import { PortfolioWindow } from "../Components/Portfolio/PortfolioWindow";

export const Portfolio = () => {
  return (
    <div>
      <BackArrow prev='/' />
      <header>
        <h1>web developer portfolio</h1>
        <h3>
          From Web Components and UI/UX animations to React.JS, Redux, Vue.JS,
          and Node.JS. Check out my latest web software development portfolio
          projects.
        </h3>
      </header>
      <div className='portfolio-windows'>
        <PortfolioWindow
          projectName={"Daisy Draws"}
          pictureStandard={DaisyDrawsGallery}
          pictureHover={DaisyDrawsAbout}
          technologies={["React", "Bootstrap", "CSS Animation"]}
        />
        <PortfolioWindow
          projectName='Eden to Eternity'
          pictureStandard={EToEStandard}
          pictureHover={EToEHover}
          technologies={[
            "ReactJS",
            "Redux",
            "NodeJS",
            "Firebase",
            "MaterialUI",
          ]}
        />
        <PortfolioWindow
          projectName='Resort'
          pictureStandard={ResortStandard}
          pictureHover={ResortHover}
          technologies={["HTML5", "CSS", "VanillaJS"]}
        />
        <PortfolioWindow
          projectName='Expense Tracker'
          pictureStandard={ExpenseStandard}
          pictureHover={ExpenseHover}
          technologies={["ReactJS", "Bootstrap", "ContextAPI"]}
        />
        {/* <PortfolioWindow />
        <PortfolioWindow /> */}
      </div>
      <ForwardArrow next='/contact' />
    </div>
  );
};
