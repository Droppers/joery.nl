import React from "react";
import SocialIcons from "../../../social-icons/social-icons";
import Bubble from "vector/bubble";

class Cover extends React.Component {
  render() {
    return (
      <section className="container cover">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-md-12">
            <Bubble className="bubble" src="static/vector/bubble.svg" />
            <h1 class="title">Joery Droppers</h1>
            <h2>Software Engineer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodz tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <SocialIcons className="social-media" />
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
