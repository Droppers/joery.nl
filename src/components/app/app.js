import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeRoute from "../routes/home/home";
import AboutRoute from "../routes/about/about";
import NavBar from "../nav-bar/nav-bar";
import Footer from "../footer/footer";
import ProjectRoute from "../routes/project/project";
import NotFoundRoute from "../routes/not-found/not-found";
import BackgroundBottom from "vector/background-bottom";
import BackgroundTop from "vector/background-top";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app" className="home">
          <BackgroundBottom
            className="corner corner-bottom dont-print"
            src="/static/images/background-bottom.svg"
            alt="Bottom"
          />
          <BackgroundTop
            className="corner corner-top dont-print"
            src="/static/images/background-top.svg"
            alt="Top"
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
