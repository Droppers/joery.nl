import React from "react";
import Cover from "./cover/cover";
import ProjectCard from "./project-card/project-card";
import { allProjects } from "../../../services/data-service";
import MetaTags from "react-meta-tags";

class HomeRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: allProjects,
    };
  }

  render() {
    const { projects } = this.state;

    return (
      <div id="page-root">
        <MetaTags>
          <title>Joery Droppers</title>
          <meta name="description" content="I am a 25-year-old software developer and live in Borculo, The Netherlands. In my spare time, I like to contribute to open-source projects and stay up to date with the latest technologies." />
          <meta property="og:title" content="Joery Droppers" />
          <meta property="og:description" content="I am a 25-year-old software developer and live in Borculo, The Netherlands. In my spare time, I like to contribute to open-source projects and stay up to date with the latest technologies." />
        </MetaTags>

        <Cover />
        <section className="content">
          <div className="container">
            <h2 className="title align-middle">My projects</h2>

            <div className="row d-flex">
              {projects.map((project, key) => (
                <div className="col-md-6 col-lg-4" key={key}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeRoute;
