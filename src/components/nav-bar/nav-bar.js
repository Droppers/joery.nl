import React, { useEffect, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Translate } from "utils/translate";
import SvgLogo from "assets/vector/logo.svg";
import SvgHome from "assets/vector/icons/home.svg";
import SvgAbout from "assets/vector/icons/about.svg";
import LocalePicker from "components/locale-picker/locale-picker";
import ThemeToggle from "components/theme-toggle/theme-toggle";

const NavBar = ({ history }) => {
  const [home, setHome] = useState(history.location.pathname === "/");
  const [transparent, setTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => setTransparent(window.pageYOffset < 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", () => handleScroll);
  }, []);

  useEffect(() => {
    const unlisten = history.listen((location) => {
      window.scrollTo(0, 0);
      setHome(location.pathname === "/");
    });
    return () => unlisten();
  }, []);

  return (
    <div
      className={`nav-bar ${
        (home && transparent) || transparent ? "transparent" : ""
      }`}
    >
      <div className="container d-flex">
        <Link className="logo d-inline-flex align-items-center" to="/">
          <SvgLogo
            width="38"
            height="38"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <span className="dont-print">Joery</span>
          <span className="print">Joery Droppers</span>
        </Link>
        <div className="locale-container dont-print">
          <ThemeToggle />
          <LocalePicker />
        </div>
        <nav className="nav d-flex dont-print">
          <NavLink exact className="link" to="/">
            <SvgHome />
            <Translate path="navigation.home" />
          </NavLink>
          <NavLink className="link" to="/about">
            <SvgAbout />
            <Translate path="navigation.about" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
