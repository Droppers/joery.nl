import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../image/image";
import PhoneFrame from "./phone-frame/phone-frame";

class ProjectCard extends React.Component {
  render() {
    const { project } = this.props;

    return (
      <div className="card project-card">
        {project.cover.type === "app" && (
          <div
            className="project-cover type-app"
            style={{
              background: project.cover.background,
            }}
          >
            <PhoneFrame
              className="left"
              src={
                "/static/images/projects/" + project.cover.image_left + ".png"
              }
              alt="Left preview"
              size={256}
            />
            <PhoneFrame
              className="right"
              src={
                "/static/images/projects/" + project.cover.image_right + ".png"
              }
              alt="Right preview"
              size={256}
            />
            {/* <div className="icon">
              <Image
                alt="App icoon"
                image={"/static/images/projects/" + project.cover.icon + ".png"}
                extension="png"
                width="70"
                height="70"
                size={128}
              />
            </div> */}
          </div>
        )}
        {project.cover.type === "image" && (
          <div
            className="project-cover type-image"
            style={{
              background: project.cover.background,
            }}
          >
            <Image
              alt="Voorbeeld"
              style={{ objectFit: project.cover.fit }}
              image={"./static/images/projects/" + project.cover.image + ".png"}
              size={512}
            />
          </div>
        )}
        <div className="content">
          <span className="title">{project.name}</span>
          <span className="description">{project.description}</span>
          {project.slug && (
            <Link
              to={"/project/" + project.slug}
              className="btn btn-primary btn-outline read-more"
            >
              Meer informatie
            </Link>
          )}
          {project.github && (
            <a
              href={"https://github.com/" + project.github}
              className="btn btn-primary btn-outline read-more"
            >
              Bekijk op GitHub
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
