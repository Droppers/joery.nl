import React from "react";
import { projects } from "data";
import { TranslatableMeta, Translate } from "utils/translate";
import ProjectCard from "components/project-card/project-card";
import Cover from "components/cover/cover";

const HomeRoute = () => (
  <div id="page-root">
    <TranslatableMeta path="home" />
    <Cover />
    <section className="content">
      <div className="container">
        <h2 className="title align-middle">
          <Translate path="home.projects.title" />
        </h2>

        <div className="row d-flex">
          <For each="project" of={projects}>
            <div className="col-md-6 col-lg-4" key={project.name}>
              <ProjectCard project={project} language="en" />
            </div>
          </For>
        </div>
      </div>
    </section>
  </div>
);

export default HomeRoute;
