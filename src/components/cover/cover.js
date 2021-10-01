import React from "react";
import SocialIcons from "components/social-icons/social-icons";
import SvgBubble from "assets/vector/bubble.svg";
import { Translate } from "utils/translate";

const Cover = () => (
  <section className="container cover">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-md-12">
        <SvgBubble className="bubble" />
        <h1 className="title">
          <Translate path="home.cover.name" />
        </h1>
        <h2>
          <Translate path="home.cover.profession" />
        </h2>
        <p>
          <Translate path="home.cover.introduction" />
        </p>
        <SocialIcons className="social-media" />
      </div>
    </div>
  </section>
);

export default Cover;
