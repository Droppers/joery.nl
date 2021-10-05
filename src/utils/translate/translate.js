import React from "react";
import PropTypes from "prop-types";
import { translate } from "./core";
import useTranslation from "./use-translation";

const Translate = ({ path, ...otherProps }) => {
  useTranslation();
  return <>{translate(path, otherProps)}</>;
};

Translate.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Translate;
