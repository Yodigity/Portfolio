import React from "react";
import "../Components/Portfolio/PortfolioWindow.scss";

export const ProjectPreview = (props) => {
  const { name, picture, description } = props.location.state;
  console.log(props);
  return (
    <div>
      <div className='project-preview-container'>
        <header>
          <h1>{name}</h1>
          <p>{description}</p>
        </header>

        <div
          className='window'
          style={{ width: "700px", height: "100px", margin: "40px auto" }}
        >
          <div className='titlebar'>
            <div className='buttons'>
              <div className='close'>
                <div className='closebutton' href='#'>
                  <span>
                    <strong>x</strong>
                  </span>
                </div>
                {/* <!-- close button link --> */}
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
            {name}
            {/* <!-- window title --> */}
          </div>
          <div className='content'>
            <img src={picture} style={{ width: "100%" }} />
            {/* <!-- window content --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
