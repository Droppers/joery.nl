import React from "react";
import Timeline from "../../timeline/timeline";
import MetaTags from "react-meta-tags";
import classnames from "classnames";

import Bronkhorst from "vector/experience/bronkhorst";
import ArborMedia from "vector/experience/arbor-media";
import GraafschapCollege from "vector/experience/graafschap-college";
import Saxion from "vector/experience/saxion";

import Csharp from "vector/icons/skills/csharp";
import Javascript from "vector/icons/skills/javascript";
import Powershell from "vector/icons/skills/powershell";
import Sql from "vector/icons/skills/sql";
import Mysql from "vector/icons/skills/mysql";

const Skills = (props) => {
  return (
    <div className={classnames("icon-list", props.className)}>
      <div className="icon-list-item">
        <Csharp className="icon" />
        C#
      </div>
      <div className="icon-list-item">
        <Javascript className="icon" />
        JavaScript
      </div>
      <div className="icon-list-item">
        <Powershell className="icon" />
        PowerShell
      </div>
      <div className="icon-list-item">
        <Sql className="icon" />
        SQL Server
      </div>
      <div className="icon-list-item">
        <Mysql className="icon" />
        MySQL
      </div>
    </div>
  );
};

class AboutRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      work: [
        {
          title: "Bronkhorst",
          logo: Bronkhorst,
          children: [
            {
              title: "Software Developer",
              subtitle: "Side job",
              from: "jul. 2019",
              to: "may 2020",
            },
            {
              title: "Software Developer",
              subtitle: "Summer job",
              from: "jul. 2018",
              to: "aug. 2018",
            },
          ],
        },
        {
          title: "Arbor Media",
          subtitle: "Summer job – Software Developer",
          logo: ArborMedia,
          from: "jul. 2017",
          to: "aug. 2017",
        },
      ],
      education: [
        {
          title: "Saxion University",
          subtitle: "HBO-ICT – Software Developer",
          logo: Saxion,
          from: "2018",
          to: "current",
          children: [
            {
              title: "Bronkhorst High-Tech",
              subtitle: "Internship – Software Ontwikkelaar",
              logo: Bronkhorst,
              from: "aug. 2020",
              to: "heden",
            },
          ],
        },
        {
          title: "Graafschap College",
          subtitle: "Application Developer",
          logo: GraafschapCollege,
          from: "2015",
          to: "2018",
          children: [
            {
              title: "Bronkhorst High-Tech",
              subtitle: "Internship – Software Developer",
              logo: Bronkhorst,
              from: "feb. 2018",
              to: "jul. 2018",
            },
            {
              title: "Arbor Media",
              subtitle: "Internship – Software Developer",
              logo: ArborMedia,
              from: "sep. 2016",
              to: "feb. 2017",
            },
          ],
        },
      ],
    };
  }

  render() {
    const { work, education } = this.state;

    return (
      <div id="page-root">
        <div id="about" className="container page-content small">
          <MetaTags>
            <title>About me - Joery Droppers</title>
            <meta name="description" content="I am a 25-year-old software developer and live in Borculo, The Netherlands. In my spare time, I like to contribute to open-source projects and stay up to date with the latest technologies." />
            <meta property="og:title" content="About me - Joery Droppers" />
            <meta
              property="og:description"
              content="I am a 25-year-old software developer and live in Borculo, The Netherlands. In my spare time, I like to contribute to open-source projects and stay up to date with the latest technologies."
            />
          </MetaTags>
          <div className="row">
            <div className="col-lg-12">
              <h2 className="title">My information</h2>
            </div>
            <div className="col-lg-7 col-md-7 about-left">
              <h3 className="title">Work experience</h3>
              <Timeline items={work} />
              <h3 className="title">Education</h3>
              <Timeline items={education} />
            </div>
            <div className="col-lg-5 col-md-5 about-right">
              <div
                onClick={() =>
                  window.open("/static/cv-joery-droppers.pdf", "_blank")
                }
                className="btn btn-primary btn-outline btn-large print-resume"
              >
                Download my resume
              </div>
              <div className="card">
                <div className="card-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </div>
              <div className="card">
                <div className="card-title">Skills</div>
                <div className="card-content">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutRoute;
