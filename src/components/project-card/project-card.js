import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GitHubRepo } from "react-github-data";
import SvgGithub from "assets/vector/icons/github.svg";
import SvgStar from "assets/vector/icons/star.svg";
import { isPrerender } from "utils/browser";
import classNames from "classnames";
import { translate, translateObject, useTranslation } from "utils/translate";
import PhoneFrame from "./phone-frame/phone-frame";

const ProjectCard = (props) => {
  useTranslation();
  const [githubLoading, setGithubLoading] = useState(true);
  const { project, hideButton } = props;

  return (
    <div className="project-card">
      <Choose>
        <When condition={project.cover.type === "app"}>
          <div
            className="project-cover type-app"
            style={{
              background: project.cover.background,
            }}
          >
            <PhoneFrame
              className="left"
              src={`/static/images/projects/${project.cover.image_left}.png`}
              alt="Left preview"
              size={256}
            />
            <PhoneFrame
              className="right"
              src={`/static/images/projects/${project.cover.image_right}.png`}
              alt="Right preview"
              size={256}
            />
          </div>
        </When>
        <When condition={project.cover.type === "image"}>
          <div
            className="project-cover type-image"
            style={{
              background: project.cover.background,
            }}
          >
            <Choose>
              <When condition={typeof project.cover.image === "string"}>
                <div className="image-wrapper">
                  {/* <Image
                alt="Voorbeeld"
                image={`./static/images/projects/${project.cover.image}.png`}
                style={{
                  filter: project.cover.filter,
                }}
                size={512}
              /> */}
                </div>
              </When>
              <Otherwise>
                <project.cover.image
                  style={{
                    filter: project.cover.filter,
                  }}
                />
              </Otherwise>
            </Choose>
          </div>
        </When>
      </Choose>
      <div className="content">
        <h3 className="title">{translateObject(project, "name")}</h3>
        <span className="description">
          {translateObject(project, "description")}
        </span>
        <div className="bottom">
          <If condition={!hideButton}>
            <If condition={project.slug}>
              <Link
                to={`/project/${project.slug}`}
                className="btn btn-primary btn-outline read-more"
              >
                {translate("moreInformation")}
              </Link>
            </If>
            <If condition={project.github}>
              <a
                href={`https://github.com/${project.github.user}/${project.github.repo}`}
                className="btn btn-primary btn-outline read-more"
              >
                <SvgGithub /> GitHub
              </a>
            </If>
          </If>
          <If condition={project.github && !isPrerender()}>
            <div
              className={classNames(
                "github-stars",
                githubLoading ? "d-none" : ""
              )}
            >
              <SvgStar />
              <GitHubRepo
                user={project.github.user}
                repo={project.github.repo}
                data="stars"
                onDataLoad={() => {
                  setGithubLoading(false);
                }}
              />
            </div>
          </If>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
