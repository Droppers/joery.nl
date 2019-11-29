import React from "react";
import Linkedin from "../../vector/icons/linkedin";
import Github from "../../vector/icons/github";

class SocialIcons extends React.Component {
  render() {
    return (
      <div className="social-icons">
        <a href="https://github.com/droppers" aria-label="Github" className="icon">
          <Linkedin alt="Github" src="/static/icons/github.svg" />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="icon">
          <Github alt="LinkedIn" src="/static/icons/linkedin.svg" />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
