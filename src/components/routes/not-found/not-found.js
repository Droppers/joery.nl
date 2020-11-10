import React from "react";
import MetaTags from "react-meta-tags";

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div id="page-root">
        <div id="not-found" className="container page-content small not-found">
          <MetaTags>
            <title>404</title>
            <meta name="description" content="Pagina niet gevonden" />
            <meta property="og:title" content="404" />
            <meta property="og:description" content="Pagina niet gevonden" />
          </MetaTags>
          <div class="four-o-four">404</div>
          <h2 class="title">Pagina niet gevonden</h2>
          <a href="/" class="btn btn-primary btn-outline go-home">
            Terug naar het begin
          </a>
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;
