import React from "react";
import Linkedin from "vector/icons/linkedin";
import Github from "vector/icons/github";

class SocialIcons extends React.Component {
  render() {
    return (
      <div className="social-icons">
        <a href="https://github.com/droppers" aria-label="Github" className="icon">
          <Github alt="Github" />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="icon">
          <Linkedin alt="LinkedIn" />
        </a>
      </div>
    );
  }
}

export default SocialIcons;
