import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import Logo from "vector/logo";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home: this.props.history.location.pathname === "/",
      transparent: true
    };
  }

  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.routeUpdated(location);
    });

    window.addEventListener("scroll", () => this.handleScroll());
  }
  componentWillUnmount() {
    this.unlisten();

    window.removeEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    this.setState({
      transparent: window.scrollY < 50
    });
  }

  routeUpdated(location) {
    window.scrollTo(0, 0);

    this.setState({
      home: location.pathname === "/"
    });
  }

  render() {
    const { home, transparent } = this.state;

    return (
      <div
        className={
          "nav-bar " +
          ((home && transparent) || transparent ? "transparent" : "")
        }
      >
        <div className="container d-flex justify-content-between ">
          <Link className="logo d-inline-flex align-items-center" to="/">
            <Logo
              width="38"
              height="38"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Joery
          </Link>
          <nav className="nav d-flex">
            <NavLink exact className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/about">
              Over mij
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
