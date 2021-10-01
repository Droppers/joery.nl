import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "components/nav-bar/nav-bar";
import Footer from "components/footer/footer";
import SvgBubbleCorner from "assets/vector/bubble-corner.svg";

import HomeRoute from "routes/home/home";
import AboutRoute from "routes/about/about";
import ResumeRoute from "routes/resume/resume";
import NotFoundRoute from "routes/not-found/not-found";

const App = () => (
  <BrowserRouter>
    <div id="app" className="home">
      <SvgBubbleCorner className="bubble-corner" />

      <NavBar />

      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route eaxct path="/about" component={AboutRoute} />
        <Route eaxct path="/resume" component={ResumeRoute} />
        <Route exact path="/404" component={NotFoundRoute} />
        <Route exact component={NotFoundRoute} />
      </Switch>

      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
