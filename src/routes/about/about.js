import React from "react";
import Timeline from "components/timeline/timeline";
import IconList from "components/icon-list/icon-list";

import { resume } from "data";
import SvgDownload from "assets/vector/icons/download.svg";
import Picture from "assets/images/picture.png";
import {
  TranslatableMeta,
  Translate,
  TranslationSettings,
  useTranslation,
} from "utils/translate";

const AboutRoute = () => {
  useTranslation();

  return (
    <div id="page-root">
      <TranslatableMeta path="about" />
      <div id="about" className="container page-content small">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="title">
              <Translate path="about.title" />
            </h2>
          </div>
        </div>
        <div className="row about-content">
          <div className="col-lg-4 col-md-4 about-left">
            <div className="download-resume-container">
              <div className="picture">
                <img src={Picture} alt="Joery Droppers" />
              </div>
              <div
                onClick={() =>
                  window.open(
                    `https://firebasestorage.googleapis.com/v0/b/joery-f5c2d.appspot.com/o/resumes%2Fcv-joery-droppers.${TranslationSettings.locale}.pdf?alt=media`,
                    "_blank"
                  )
                }
                role="button"
                tabIndex={0}
                className="btn btn-primary btn-outline btn-large print-resume"
              >
                <SvgDownload />
                <Translate path="about.downloadResume" />
              </div>
            </div>
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
          <div className="col-lg-8 col-md-8">
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
      </div>
    </div>
  );
};

export default AboutRoute;
