import React from "react";

import "./PortfolioWindow.scss";

export const PortfolioWindow = () => {
  return (
    <div>
      <div class='window'>
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
          Daisy Draws
          {/* <!-- window title --> */}
        </div>
        <div class='content'>
          <h3>Hey! What's up?</h3>
          I'm a simple OS X Yosemite style window.
          {/* <!-- window content --> */}
        </div>
      </div>
    </div>
  );
};
