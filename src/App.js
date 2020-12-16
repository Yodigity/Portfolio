import logo from "./logo.svg";
import "./App.scss";
import { Navigation } from "./Components/Navigation/Navigation";
import { ProfileIntro } from "./Components/ProfileIntro/ProfileIntro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./Pages/About";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
