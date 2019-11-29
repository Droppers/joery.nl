/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const typeMapping = {
  png: "image/png",
  jpg: "image/jpeg"
};

class Image extends React.Component {
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

    const { src } = this.props;
    let webpSrc = "";
    let type = "";
    if (src) {
      webpSrc = src.substr(0, src.lastIndexOf(".")) + ".webp";

      const extension = src.split(".").pop();
      type = typeMapping[extension];
    }

    const renderSource = !development && src;

    return (
      <picture>
        {renderSource && <source srcSet={webpSrc} type="image/webp" />}
        {renderSource && <source srcSet={src} type={type} />}
        <img {...this.props} />
      </picture>
    );
  }
}

export default Image;
