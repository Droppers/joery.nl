import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../image/image";
import PhoneFrame from "./phone-frame/phone-frame";

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;

    return (
      <div className="card project-card">
        {project.type === "app" && (
          <div className="project-cover app">
            <PhoneFrame
              className="left"
              src={
                "./static/images/projects/" + project.cover.image_left + ".png"
              }
              alt="Left preview"
            />
            <PhoneFrame
              className="right"
              src={
                "./static/images/projects/" + project.cover.image_right + ".png"
              }
              alt="Right preview"
            />
          </div>
        )}
        {project.type === "website" && (
          <div className="project-cover website">
            <Image
              alt="Voorbeeld"
              image={"./static/images/projects/" + project.cover.image + ".png"}
              size={512}
            />
          </div>
        )}
        <div className="content">
          <span className="title">{project.name}</span>
          <span className="description">{project.description}</span>
          <Link
            to={"/project/" + project.slug}
            className="btn btn-primary btn-outline read-more"
          >
            Meer informatie
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
