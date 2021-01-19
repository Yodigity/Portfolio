import React from "react";

import { AwesomeButtonSocial } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export const Social = () => {
  return (
    <div style={{ margin: "25px auto" }}>
      <div className='social'>
        <h4>Let's get social</h4>
        <p>
          Follow my online fan page on Facebook and profiles on Twitter, GitHub
          and Linkedin.
        </p>
      </div>

      <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type='facebook'
        style={{ margin: "0 8px 8px 0" }}
      >
        Facebook
      </AwesomeButtonSocial>
      <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type='instagram'
        style={{ margin: "0 8px 8px 0" }}
      >
        Instagram
      </AwesomeButtonSocial>
      <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type='linkedin'
        style={{ margin: "0 8px 8px 0" }}
      >
        Linkedin
      </AwesomeButtonSocial>

      <AwesomeButtonSocial
        cssModule={AwesomeButtonStyles}
        type='github'
        style={{ margin: "0 8px 8px 0" }}
      >
        Github
      </AwesomeButtonSocial>
    </div>
  );
};
