import React from "react";
import { MetaTags } from "react-meta-tags";
import PropTypes from "prop-types";
import useTranslation from "./use-translation";
import { translate } from "./core";

const TranslatableMeta = ({ path, replacements }) => {
  useTranslation();

  const values = { ...translate(`meta.${path}`, replacements) };
  if (!values.og) values.og = {};
  values.og.title = values.title;
  values.og.description = values.description;

  const { title, og, ...otherValues } = values;
  return (
    <MetaTags>
      {values.title && <title>{values.title}</title>}
      {otherValues &&
        Object.entries(otherValues).map(([key, value]) => (
          <meta name={key} key={key} content={value} />
        ))}
      {og &&
        Object.entries(og).map(([key, value]) => (
          <meta property={`og:${key}`} key={`og:${key}`} content={value} />
        ))}
    </MetaTags>
  );
};

TranslatableMeta.propTypes = {
  path: PropTypes.string.isRequired,
  replacements: PropTypes.shape({}),
};

TranslatableMeta.defaultProps = {
  replacements: {},
};

export default TranslatableMeta;
