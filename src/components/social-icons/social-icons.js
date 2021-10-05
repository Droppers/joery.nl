import React from "react";
import SvgLinkedin from "assets/vector/icons/linkedin.svg";
import SvgGithub from "assets/vector/icons/github.svg";
import SvgEmail from "assets/vector/icons/email.svg";

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://github.com/droppers" aria-label="Github" className="icon">
      <SvgGithub alt="Github" />
    </a>
    <a
      href="https://www.linkedin.com/in/joerydroppers/"
      aria-label="LinkedIn"
      className="icon"
    >
      <SvgLinkedin alt="LinkedIn" />
    </a>
    <a href="mailto:mail@joery.nl" aria-label="E-mail" className="icon">
      <SvgEmail alt="E-mail" />
    </a>
  </div>
);

export default SocialIcons;
