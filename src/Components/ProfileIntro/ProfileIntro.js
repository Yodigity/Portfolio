import React from "react";
import Fade from "react-reveal/Fade";
import { useSprings, animated, useTransition } from "react-spring";
import { Transition } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import fox from "./fox.png";

export const ProfileIntro = () => {
  // console.log(letterObject);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: " 0 auto",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <img
        className='profile-image'
        src={fox}
        alt='software-developer-profile'
        width='200'
        height='auto'
      />
      <div
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   width: "100%",
      //   margin: " 0 auto",
      //   overflow: "hidden",
      // }}
      >
        <h3 className='profile-headline'>Hi, I'm Aaron</h3>

        <p className='profile-description'>
          <Fade right cascade delay={1000} duration={1500}>
            <p>
              I am a full-stack software developer with extensive experience in
              React, NodeJS, C# and more. Feel free to take a look at my latest
              projects on my{" "}
            </p>
            <a
              href='/portfolio'
              style={{ color: "#cacaca", fontWeight: "bold" }}
            >
              portfolio page
            </a>
            <p>Remotely available UTC−1 to UTC+8. email@email.com</p>
          </Fade>
        </p>
      </div>
    </div>
  );
};
