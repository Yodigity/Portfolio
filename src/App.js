import React, { useContext } from "react";
import { useTransition, animated } from "react-spring";
import "./App.scss";
import { Navigation } from "./Components/Navigation/Navigation";
import { ProfileIntro } from "./Components/ProfileIntro/ProfileIntro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocation, __RouterContext } from "react-router";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import { ProjectPreview } from "./Pages/ProjectPreview";

const App = () => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100vw,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-75vw,0,0)" },
    config: { mass: 1, tension: 50, friction: 10, clamp: true },
  });
  return (
    <div className='App'>
      <Navigation />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path='/' component={About} />

            <Route exact path='/portfolio' component={Portfolio} />

            <Route exact path='/contact' component={Contact} />

            <Route
              exact
              path='/project'
              render={(props) => <ProjectPreview {...props} />}
            />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
};

export default App;
