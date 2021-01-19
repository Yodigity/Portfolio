import React from "react";
import Fade from "react-reveal/Fade";
import DaisyDrawsGallery from "../Components/Portfolio/Images/DaisyDrawsGallery.jpg";
import DaisyDrawsAbout from "../Components/Portfolio/Images/DaisyDrawsAbout.jpg";
import EToEStandard from "../Components/Portfolio/Images/EToEStandard.jpg";
import EToEHover from "../Components/Portfolio/Images/EToEHover.jpg";
import ResortStandard from "../Components/Portfolio/Images/ResortStandard.jpg";
import ResortHover from "../Components/Portfolio/Images/ResortHover.jpg";
import ExpenseStandard from "../Components/Portfolio/Images/ExpenseStandard.jpg";
import ExpenseHover from "../Components/Portfolio/Images/ExpenseHover.jpg";
import ChatApp from "../Components/Portfolio/Images/ChatApp.png";
import { BackArrow } from "../Components/Navigation/BackArrow";
import { ForwardArrow } from "../Components/Navigation/ForwardArrow";
import { PortfolioWindow } from "../Components/Portfolio/PortfolioWindow";
import { PageWrapper } from "../Components/PageWrapper";

export const Portfolio = () => {
  return (
    <PageWrapper>
      <BackArrow prev='/' />
      <header>
        <h1>web developer portfolio</h1>
        <h3>
          From Web Components and UI/UX animations to React.JS, Redux, and
          Node.JS. Check out my latest web software development portfolio
          projects.
        </h3>
      </header>
      <div className='portfolio-windows'>
        <Fade left cascade delay={2500} duration={3000}>
          <PortfolioWindow
            projectName={"Daisy Draws"}
            pictureStandard={DaisyDrawsGallery}
            pictureHover={DaisyDrawsAbout}
            technologies={[
              "React",
              "Bootstrap",
              "Javascript ES6",
              "CSS3",
              "CSS Animations",
              "HTML5",
            ]}
            description='Static website for client in order to display a portfolio of various artworks and animations.'
            explanation='The client asked for an effective way to display their own personal projects in a portfolio style. Upon discussion, we agreed that ease of navigation and smooth transitions between each page was essential. Upon completion, the client was very pleased with the result.'
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
            description="Social Media web application, inspired by Twitter, allowing users to post 'Talks'. Fully featured comment, like and notification system."
            explanation='Communication its rapid growth has been a great interest of mine. I was fascinated by the likes of Twitter and its popularity. As a challenge, I decided to try and create my own version. Key features include the ability to like and comment on others posts, as well as the user receiving notifications.'
          />
          <PortfolioWindow
            projectName='Resort'
            pictureStandard={ResortStandard}
            pictureHover={ResortHover}
            technologies={["HTML5", "CSS", "VanillaJS"]}
            description='Front-end of resort booking website, allowing users to view rooms available with dynamic rendering of content based on user set parameters.'
          />
          <PortfolioWindow
            projectName='Expense Tracker'
            pictureStandard={ExpenseStandard}
            pictureHover={ExpenseHover}
            technologies={["ReactJS", "Bootstrap", "ContextAPI"]}
            description='Web application allowing users to record income and expenses. Implements ContextAPI to distribute state to various components.'
            explanation='This project was used to familiarise myself with React using ContectAPI. I felt it was important to be able to broaden my use of state management technology and reduce my reliance on Redux. Upon inspection of Redux it is apparent that it is not suitable for smaller applications.'
          />
          <PortfolioWindow
            projectName='Instant Chat'
            pictureStandard={ChatApp}
            pictureHover={ChatApp}
            technologies={["ReactJS", "Firebase", "MaterialUI"]}
            description='Social Media instant messaging system allowing users to send messages and create multiple chat rooms with different users.'
            explanation='As a child, I became fascinated with the fame and workings of Msn messenger. As a challenge, I wanted to create my own version. Key features include the ability to separate conversations into different rooms. Through the use of firebase, users are able t see when their messages have been read.'
          />
        </Fade>
        {/* <PortfolioWindow />
        <PortfolioWindow /> */}
      </div>
      <ForwardArrow next='/contact' />
    </PageWrapper>
  );
};
