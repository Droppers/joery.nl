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
          <div
            className="project-cover app"
            style={{
              background:
                "linear-gradient(135deg, " +
                project.cover.gradient_start +
                ", " +
                project.cover.gradient_end +
                ")"
            }}
          >
            <PhoneFrame
              className="left"
              src={
                "../static/images/projects/" + project.cover.image_left + ".jpg"
              }
              alt="Left preview"
            />
            <PhoneFrame
              className="right"
              src={
                "../static/images/projects/" +
                project.cover.image_right +
                ".jpg"
              }
              alt="Right preview"
            />
            <div className="icon">
              <Image
                alt="App icoon"
                src={"../static/images/projects/" + project.cover.icon + ".png"}
                width="70"
                height="70"
              />
            </div>
          </div>
        )}
        {project.type === "website" && (
          <div className="project-cover website">
            <Image
              alt="Voorbeeld"
              src={"../static/images/projects/" + project.cover.image + ".jpg"}
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
