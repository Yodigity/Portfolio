import React from "react";
import { useSpring, animated } from "react-spring";
import "./PortfolioWindow.scss";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const PortfolioWindow = ({
  projectName,
  pictureHover,
  pictureStandard,
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <div>
      <animated.div
        class='window'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <div class='titlebar'>
          <div class='buttons'>
            <div class='close'>
              <div class='closebutton' href='#'>
                <span>
                  <strong>x</strong>
                </span>
              </div>
              {/* <!-- close button link --> */}
            </div>
            <div class='minimize'>
              <div class='minimizebutton' href='#'>
                <span>
                  <strong>&ndash;</strong>
                </span>
              </div>
              {/* <!-- minimize button link --> */}
            </div>
            <div class='zoom'>
              <div class='zoombutton' href='#'>
                <span>
                  <strong>+</strong>
                </span>
              </div>
              {/* <!-- zoom button link --> */}
            </div>
          </div>
          {projectName}
          {/* <!-- window title --> */}
        </div>
        <div class='content'>
          <div className='overlay'>
            <div className='tech-pills-container'>
              <p className='tech-pill'>React</p>
              <p className='tech-pill'>React</p>
              <p className='tech-pill'>React</p>
              <p className='tech-pill'>React</p>
            </div>
          </div>
          <img
            src={pictureStandard}
            style={{ width: "100%" }}
            onMouseOver={(e) => (e.target.src = pictureHover)}
            onMouseOut={(e) => (e.target.src = pictureStandard)}
          />
          {/* <!-- window content --> */}
        </div>
      </animated.div>
    </div>
  );
};
