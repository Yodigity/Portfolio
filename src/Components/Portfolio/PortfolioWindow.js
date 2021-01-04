import React from "react";
import { Link, Route } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { ProjectPreview } from "../../Pages/ProjectPreview";
import "./PortfolioWindow.scss";
import { TechPill } from "./TechPill";

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
  technologies,
  description,
}) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const getTechnologies = () => {
    return technologies.map((technology, index) => {
      console.log(technology);
      return <TechPill key={index} tech={technology} className='tech-pill' />;
    });
  };

  return (
    <div>
      <animated.div
        className='window'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        <Link
          to={{
            pathname: "/project",
            state: {
              name: projectName,
              picture: pictureStandard,
              description: description,
            },
          }}
        >
          <div className='titlebar'>
            <div className='buttons'>
              <div className='close'>
                <div className='closebutton' href='#'>
                  <span>
                    <strong>x</strong>
                  </span>
                </div>
                {/* <!-- close button Route  --> */}
              </div>
              <div className='minimize'>
                <div className='minimizebutton' href='#'>
                  <span>
                    <strong>&ndash;</strong>
                  </span>
                </div>
                {/* <!-- minimize button link --> */}
              </div>
              <div className='zoom'>
                <div className='zoombutton' href='#'>
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
          <div className='content'>
            <div className='overlay'>
              {console.log(getTechnologies())}
              <div className='tech-pills-container'>{getTechnologies()}</div>
            </div>
            <img
              src={pictureStandard}
              style={{ width: "100%", height: "100%" }}
              onMouseOver={(e) => (e.target.src = pictureHover)}
              onMouseOut={(e) => (e.target.src = pictureStandard)}
            />
            {/* <!-- window content --> */}
          </div>
        </Link>
      </animated.div>
    </div>
  );
};
