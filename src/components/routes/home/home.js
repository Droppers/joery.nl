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
          <meta name="description" content="Ik ben Joery Droppers!" />
          <meta property="og:title" content="Joery Droppers" />
          <meta property="og:description" content="Ik ben Joery Droppers!" />
        </MetaTags>

        <Cover />
        <section className="content">
          <div className="container">
            <h2 className="title align-middle">Mijn projecten</h2>

            <div className="row d-flex">
              {projects.map((project, key) => (
                <div className="col-md-8 col-lg-4" key={key}>
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
