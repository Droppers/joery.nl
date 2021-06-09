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
            <h2>Software Developer</h2>
            <p>
              I am a 22-year-old software developer and live in Borculo, The Netherlands.
              In my spare time, I like to contribute to open-source projects and stay up to date with the latest technologies.
            </p>
            <SocialIcons className="social-media" />
          </div>
        </div>
      </section>
    );
  }
}

export default Cover;
