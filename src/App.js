import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Team from "./Team";
import Home from "./Home";
import Individuals from "./Individuals"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/individuals">
            <Header />
            <Individuals/>
            <Footer />
          </Route>
          <Route path="/teams">
            <Header />
            <Team />
            <Footer />
          </Route>
          <Route path="/enterprice">
            <Header />

            <Footer />
          </Route>
          <Route path="/product">
            <Header />

            <Footer />
          </Route>
          <Route path="/pricing">
            <Header />
            
            <Footer />
          </Route>
          <Route path="/resources">
            <Header />

            <Footer />
          </Route>
          <Route path="/login">
            <Header />

            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
