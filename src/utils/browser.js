export const isMSIE = () => {
  return !!window.document.documentMode;
};
export const isSnap = () => {
  return navigator.userAgent === "ReactSnap";
};
