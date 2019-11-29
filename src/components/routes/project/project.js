import React from "react";
import ImageGallery from "./image-gallery/image-gallery";
import { allProjects } from "../../../services/data-service";
import MetaTags from "react-meta-tags";
import { withRouter } from "react-router-dom";

class ProjectRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };
  }

  componentDidMount() {
    const { projectSlug } = this.props.match.params;

    const project = allProjects.find(p => p.slug === projectSlug);
    if (project) {
      this.setState({
        project
      });
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    const { project } = this.state;

    return (
      <div className="container page-content small">
        <MetaTags>
          <title>{project.name} – Project</title>
          <meta name="description" content={project.description} />
          <meta property="og:title" content={project.name + " – Project"} />
          <meta property="og:description" content={project.description} />
        </MetaTags>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="title">{project.name}</h2>
          </div>
          <div className="col-lg-7 col-md-7">
            <ImageGallery images={project.images || []} />
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="card">
              <div className="card-content">{project.descriptionLong}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectRoute);
