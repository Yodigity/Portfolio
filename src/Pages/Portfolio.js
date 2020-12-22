import React from "react";
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
        <PortfolioWindow />
        <PortfolioWindow />
        <PortfolioWindow />
        <PortfolioWindow />
        <PortfolioWindow />
        <PortfolioWindow />
      </div>
      <ForwardArrow next='/contact' />
    </div>
  );
};
