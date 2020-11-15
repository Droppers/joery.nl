import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import BubbleCorner from "vector/bubble-corner";

import HomeRoute from "../routes/home/home";
import AboutRoute from "../routes/about/about";
import ProjectRoute from "../routes/project/project";
import NotFoundRoute from "../routes/not-found/not-found";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app" className="home">
          <BubbleCorner
            className="bubble-corner"
            src="static/vector/bubble-corner.svg"
          />

          <NavBar />

          <Switch>
            <Route exact path="/" component={HomeRoute}></Route>
            <Route eaxct path="/about" component={AboutRoute}></Route>
            <Route
              exact
              path="/project/:projectSlug"
              component={ProjectRoute}
            ></Route>
            <Route exact component={NotFoundRoute} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
