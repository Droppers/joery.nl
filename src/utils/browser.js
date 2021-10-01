export const isMSIE = () => !!window.document.documentMode;

export const isPrerender = () =>
  navigator.userAgent === "ReactSnap" ||
  navigator.userAgent.toLowerCase().indexOf("prerender") !== -1;
