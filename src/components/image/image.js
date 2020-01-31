/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.supportsWebp = this.supportsWebp();
  }

  supportsWebp() {
    if (typeof window.supportsWebp !== "undefined") return window.supportsWebp;

    const elem =
      typeof document === "object" ? document.createElement("canvas") : {};

    window.supportsWebp =
      elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;

    return window.supportsWebp;
  }

  render() {
    const development =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";

    let { src } = this.props;
    if (src) {
      const webpSrc = src.substr(0, src.lastIndexOf(".")) + ".webp";
      if (!development) {
        src = this.supportsWebp ? webpSrc : src;
      }
    }

    return <img {...this.props} src={src} loading="lazy" />;
  }
}

export default Image;
