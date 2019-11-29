import React from "react";
import Timeline from "./timeline/timeline";
import MetaTags from "react-meta-tags";
import Bronkhorst from "vector/experience/bronkhorst";
import ArborMedia from "vector/experience/arbor-media";
import GraafschapCollege from "vector/experience/graafschap-college";
import Saxion from "vector/experience/saxion";

class AboutRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      work: [
        {
          title: "Bronkhorst High-Tech",
          logo: Bronkhorst,
          children: [
            {
              title: "Software developer",
              subtitle: "Vakantiekracht",
              from: "jul. 2019",
              to: "heden"
            },
            {
              title: "Software developer",
              subtitle: "Vakantiewerk",
              from: "jul. 2018",
              to: "aug. 2018"
            }
          ]
        },
        {
          title: "Arbor Media",
          subtitle: "Vakantiewerk, software developer",
          logo: ArborMedia,
          from: "jul. 2017",
          to: "aug. 2017"
        }
      ],
      education: [
        {
          title: "Saxion University of Applied Sciences",
          subtitle: "Bachelor's degree, Computer Software Engineering",
          logo: Saxion,
          from: "2018",
          to: "heden"
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
              subtitle: "Stage, software developer",
              logo: Bronkhorst,
              from: "feb. 2018",
              to: "jul. 2018"
            },
            {
              title: "Arbor Media",
              subtitle: "Stage, software developer",
              logo: ArborMedia,
              from: "sep. 2016",
              to: "feb. 2017"
            }
          ]
        }
      ]
    };
  }

  render() {
    const { work, education } = this.state;

    return (
      <div id="about" className="container page-content small">
        <MetaTags>
          <title>Over mij</title>
          <meta name="description" content="Hier wat informatie over mij!" />
          <meta property="og:title" content="Over mij" />
          <meta
            property="og:description"
            content="Hier wat informatie over mij!"
          />
        </MetaTags>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="title">Mijn informatie</h2>
          </div>
          <div className="col-lg-7 col-md-7">
            <h3 className="title">Werkervaring</h3>
            <Timeline items={work} />
            <h3 className="title">Educatie</h3>
            <Timeline items={education} />
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="card">
              <div className="card-content">
                Lorem ipsum durum, ik weet niet hoe het gaat. Ik ben te lui om
                te zoeken naar lorem ipsum, dus ik typ dit.
              </div>
            </div>
            <div className="card">
              <div className="card-title">Programmeren</div>
              <div className="card-content">
                Lorem ipsum durum, ik weet niet hoe het gaat. Ik ben te lui om
                te zoeken naar lorem ipsum, dus ik typ dit.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutRoute;
