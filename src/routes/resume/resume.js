import React from "react";
import { projects, resume } from "data";
import Timeline from "components/timeline/timeline";
import IconList from "components/icon-list/icon-list";
import ProjectCard from "components/project-card/project-card";
import { Translate } from "utils/translate";
import Picture from "assets/images/picture.png";

const ResumeRoute = () => (
  <div id="page-root">
    <div id="resume" className="container page-content small">
      <div className="row">
        <div className="summary-container col-12">
          <div className="picture">
            <img src={Picture} alt="Joery Droppers" />
          </div>
          <div className="summary">
            <Translate path="about.summary" />
          </div>
        </div>
        <div className="col resume-left">
          <h3 className="title">
            <Translate path="about.personalInfo" />
          </h3>
          <IconList items={resume.personalia} />
          <h3 className="title">
            <Translate path="about.skills" />
          </h3>
          <IconList items={resume.skills} />
          <h3 className="title">
            <Translate path="about.languages" />
          </h3>
          <IconList items={resume.languages} />
          <h3 className="title">
            <Translate path="about.hobbys" />
          </h3>
          <IconList items={resume.hobbies} />
        </div>
        <div className="col resume-right">
          <h3 className="title">
            <Translate path="about.experience.work" />
          </h3>
          <Timeline items={resume.work} />
          <h3 className="title">
            <Translate path="about.experience.education" />
          </h3>
          <Timeline items={resume.education} />
        </div>
      </div>
      <div className="row pagebreak">
        <div className="col-12">
          <h2 className="title align-middle">
            <Translate path="about.myProjects" />
          </h2>
          <div className="row d-flex">
            <For each="project" of={projects}>
              <div className="col-6" key={project.name.en}>
                <ProjectCard project={project} hideButton />
              </div>
            </For>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumeRoute;
