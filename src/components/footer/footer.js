import React from "react";
import SocialIcons from "components/social-icons/social-icons";
import SvgLogo from "assets/vector/logo.svg";

const Footer = () => (
  <footer id="main-footer" className="dont-print">
    <SvgLogo
      alt="Joery Droppers"
      className="logo"
      src="/static/images/logo.svg"
    />
    <div className="footer-info">
      <span className="copyright">
        Copyright {new Date().getFullYear()} - Joery Droppers
      </span>
      <SocialIcons />
    </div>
  </footer>
);

export default Footer;
