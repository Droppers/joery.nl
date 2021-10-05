import React from "react";
import Settings from "./settings";

const findTransation = (translations, key) => {
  let obj = translations;
  let newKey = key.replace(/\[(\w+)\]/g, ".$1"); // convert indexes to properties
  newKey = newKey.replace(/^\./, ""); // strip a leading dot
  const split = newKey.split(".");
  // eslint-disable-next-line no-plusplus
  for (let i = 0, n = split.length; i < n; ++i) {
    const k = split[i];
    if (k in obj) {
      obj = obj[k];
    } else {
      return null;
    }
  }
  return obj;
};

const replace = (translation, replacements) => {
  if (typeof translation === "string") {
    let result = translation;
    Object.keys(replacements).forEach((replacement) => {
      result = result
        .split(`%{${replacement}}`)
        .join(replacements[replacement] ?? "");
    });
    return result;
  }
  if (React.isValidElement(translation)) {
    return translation;
  }
  if (typeof translation === "object") {
    const result = {};
    Object.keys(translation).forEach((translationKey) => {
      result[translationKey] = replace(
        translation[translationKey],
        replacements
      );
    });
    return result;
  }
  return null;
};

// eslint-disable-next-line import/prefer-default-export
export const translate = (key, replacements = {}) => {
  let translation = "";
  try {
    translation = findTransation(
      Settings.translations,
      `${Settings.locale}.${key}`,
      replacements.count
    );
  } catch (err) {
    return `Missing translation for key: "${key}".`;
  }

  if (translation) {
    return replace(translation, replacements);
  }

  return `Missing translation for key: "${key}".`;
};

export const translateObject = (object, key, replacements = {}) => {
  if (Settings.locale in object) {
    return replace(object[Settings.locale][key], replacements);
  }
  if (key in object) {
    if (typeof object[key] === "object" && Settings.locale in object[key]) {
      return replace(object[key][Settings.locale], replacements);
    }

    return replace(object[key], replacements);
  }

  return `Missing translation for key: "${key}".`;
};
