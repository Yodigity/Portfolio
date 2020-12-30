import React, { useContext } from "react";
import { useTransition, animated } from "react-spring";
import "./App.scss";
import { Navigation } from "./Components/Navigation/Navigation";
import { ProfileIntro } from "./Components/ProfileIntro/ProfileIntro";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  __RouterContext,
} from "react-router-dom";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={About} />

          <Route path='/portfolio' component={Portfolio} />

          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
