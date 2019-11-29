import React from 'react';
import SocialIcons from "../../../social-icons/social-icons";

class Cover extends React.Component {
  render() {
    return (
      <div className="container cover">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-md-12">
            <h1>Ik ben Joery Droppers</h1>
            <h2>Software developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <SocialIcons />
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
