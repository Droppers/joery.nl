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
      this.routeChanged(location);
    });

    window.addEventListener("scroll", () => this.handleScroll());
  }
  componentWillUnmount() {
    this.unlisten();

    window.removeEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    this.setState({
      transparent: window.pageYOffset < 50
    });
  }

  routeChanged(location) {
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
            <span className="dont-print">Joery</span>
            <span className="print">Joery Droppers</span>
          </Link>
          <nav className="nav d-flex dont-print">
            <NavLink exact className="link" to="/">
              Home
            </NavLink>
            <NavLink className="link" to="/about">
              About me
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
