import React from "react";

import fox from "./fox.png";
export const ProfileIntro = () => {
  return (
    <div>
      <img
        className='profile-image'
        src={fox}
        alt='software-developer-profile'
        width='200'
        height='auto'
      />
      <h3 className='profile-headline'>Hi, I'm Aaron</h3>
      <p className='profile-description'>
        I am a full-stack software developer. Feel free to take a look at my
        latest projects on the <a href='/portfolio'>web portfolio page</a>.
        Remotely available UTC−1 to UTC+8. aarongokani@gmail.com
      </p>
    </div>
  );
};
