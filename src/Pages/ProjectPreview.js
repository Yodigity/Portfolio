import React from "react";
import "../Components/Portfolio/PortfolioWindow.scss";

export const ProjectPreview = (props) => {
  const {
    name,
    picture,
    description,
    explanation,
    techStack,
  } = props.location.state;
  return (
    <div>
      <div className='project-preview-container'>
        <header>
          <h1>{name}</h1>
          <p>{description}</p>
        </header>
        <div>
          <section>
            <div
              className='window'
              style={{
                width: "700px",

                margin: "40px auto",
                display: "block",
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
                <img src={picture} alt={name} style={{ width: "100%" }} />
                {/* <!-- window content --> */}
              </div>
            </div>
          </section>
          {/* About This Project */}
          <section>
            <div className='tech-stack-container'>
              <h2>About this project</h2>
              <p>{explanation}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <div className='tech-stack-container'>
              <h4 className='tech-stack-heading'>Tech Stack</h4>
              <p>
                Code technologies I got involved with while working on this
                project.
              </p>
              <hr />
              <ul>
                {techStack.map((element, index) => {
                  return (
                    <li key={index} className='tech-stack-element'>
                      {element}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
