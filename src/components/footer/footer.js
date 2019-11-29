import React from "react";
import SocialIcons from "../social-icons/social-icons";
import Logo from "vector/logo";

class Footer extends React.Component {
  render() {
    return (
      <footer id="main-footer">
        <Logo
          alt="Joery Droppers"
          className="logo"
          src="/static/images/logo.svg"
        />
        <span className="copyright">Copyright 2019 - Joery Droppers</span>
        <SocialIcons />
      </footer>
    );
  }
}

export default Footer;
