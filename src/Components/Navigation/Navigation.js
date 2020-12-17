import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";

const styleToggleButton = {
  fontSize: "3rem",
  color: "#F7F7F7",
  padding: 0,
  border: "none",
  background: "none",
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fullscreenMenu = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0.80)",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      position: "absolute",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 100,
    },
    leave: { opacity: 0, transform: "scale(0.80)" },
    config: config.gentle,
  });

  const openButton = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        padding: "2rem",
        overflow: "visible",

        height: "100%",
      }}
    >
      <div className='toggle-menu-button' style={{ zIndex: "101" }}>
        {openButton.map(({ item, key, props }) =>
          !item ? (
            <animated.div key={key} style={props}>
              <button style={styleToggleButton} onClick={toggleMenu}>
                <MdMenu />
              </button>
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              <button style={styleToggleButton} onClick={toggleMenu}>
                <MdClose />
              </button>
            </animated.div>
          )
        )}
      </div>

      <div>
        {fullscreenMenu.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <ul className='nav-list'>
                  <li>
                    <Link to='/' onClick={() => toggleMenu()}>
                      About
                    </Link>
                  </li>

                  <li>
                    <Link to='/portfolio' onClick={() => toggleMenu()}>
                      Projects
                    </Link>
                  </li>

                  <li>
                    <Link to='/contact' onClick={() => toggleMenu()}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};
