export const isMSIE = () => {
  return !!window.document.documentMode;
};

export const isWebkit = () => {
  return "webkitLineBreak" in document.documentElement.style;
};

export const isSnap = () => {
  return navigator.userAgent === "ReactSnap";
};
