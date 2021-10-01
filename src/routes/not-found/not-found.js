import React from "react";
import { TranslatableMeta, Translate } from "utils/translate";

const NotFoundRoute = () => (
  <div id="page-root">
    <TranslatableMeta path="notFound" />
    <div id="not-found" className="container page-content small not-found">
      <div className="four-o-four">404</div>
      <h2 className="title">
        <Translate path="notFound.title" />
      </h2>
      <a href="/" className="btn btn-primary btn-outline go-home">
        <Translate path="notFound.backHome" />
      </a>
    </div>
  </div>
);

export default NotFoundRoute;
