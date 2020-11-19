import React from "react";
import Timeline from "../../timeline/timeline";
import MetaTags from "react-meta-tags";
import classnames from "classnames";

import Bronkhorst from "vector/experience/bronkhorst";
import ArborMedia from "vector/experience/arbor-media";
import GraafschapCollege from "vector/experience/graafschap-college";
import Saxion from "vector/experience/saxion";

import MapMarker from "vector/icons/map-marker";
import EmailOutline from "vector/icons/email-outline";
import CellphoneAndroid from "vector/icons/cellphone-android";
import Earth from "vector/icons/earth";

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

class ResumeRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      work: [
        {
          title: "Bronkhorst",
          logo: Bronkhorst,
          children: [
            {
              title: "Software Ontwikkelaar",
              subtitle: "Bijbaan",
              from: "jul. 2019",
              to: "mei 2020",
            },
            {
              title: "Software Ontwikkelaar",
              subtitle: "Vakantiewerk",
              from: "jul. 2018",
              to: "aug. 2018",
            },
          ],
        },
        {
          title: "Arbor Media",
          subtitle: "Vakantiewerk – Software Ontwikkelaar",
          logo: ArborMedia,
          from: "jul. 2017",
          to: "aug. 2017",
        },
      ],
      education: [
        {
          title: "Hogeschool Saxion",
          subtitle: "HBO-ICT – Software Ontwikkelaar",
          logo: Saxion,
          from: "2018",
          to: "heden",
          children: [
            {
              title: "Bronkhorst High-Tech",
              subtitle: "Stage – Software Ontwikkelaar",
              logo: Bronkhorst,
              from: "aug. 2020",
              to: "heden",
            },
          ],
        },
        {
          title: "Graafschap College",
          subtitle: "Applicatie Ontwikkelaar",
          logo: GraafschapCollege,
          from: "2015",
          to: "2018",
          children: [
            {
              title: "Bronkhorst High-Tech",
              subtitle: "Stage – Software Ontwikkelaar",
              logo: Bronkhorst,
              from: "feb. 2018",
              to: "jul. 2018",
            },
            {
              title: "Arbor Media",
              subtitle: "Stage – Software Ontwikkelaar",
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
        <div id="resume" className="container page-content small">
          <div className="row">
            <div className="my-summary col-sm-10">
              Lorem ipsum doksssdasdlor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <div className="col-lg-7 col-md-7 resume-left">
              <h3 className="title">Werkervaring</h3>
              <Timeline items={work} />
              <h3 className="title">Educatie</h3>
              <Timeline items={education} />
            </div>
            <div className="col-lg-5 col-md-5 resume-right">
              <div class="card">
                <div class="card-title">Personalia</div>
                <div class="card-content">
                  <div className="icon-list">
                    <div className="icon-list-item">
                      <CellphoneAndroid className="icon" />
                      +31 6 18158333
                    </div>
                    <div className="icon-list-item">
                      <EmailOutline className="icon" />
                      mail@joery.nl
                    </div>
                    <div className="icon-list-item">
                      <Earth className="icon" />
                      joery.nl
                    </div>
                    <div className="icon-list-item">
                      <MapMarker className="icon" />
                      Alexandrinalaan 26, 7271 NN Borculo
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-title">Vaardigheden</div>
                <div class="card-content">
                  <Skills />
                </div>
              </div>

              <div class="card">
                <div class="card-title">Projecten</div>
                <div class="card-content">
                  <b>AnimatedBottomBar</b>
                  <br />
                  Een zeer configureerbare navigatie balk library voor Android,
                  geschreven in Kotlin. Inmiddels meer dan 350 stars op Github.
                  <br />
                  <br />
                  <b>GitHub:</b> Droppers/AnimatedBottomBar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeRoute;
