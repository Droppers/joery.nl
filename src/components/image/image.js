/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classnames from "classnames";
import { isSnap } from "../../utils/browser";

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.state = {
      loaded: false,
    };
  }

  onLoad(img) {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { loaded } = this.state;
    let { image, extension, className, size, fade, ...props } = this.props;

    const development =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (!development) {
      extension = extension || "jpg";
      size = size || 512;
      const path = image.substr(0, image.lastIndexOf("."));
      image = `https://happy-plant-0e9514b03.azurestaticapps.net/${path}-${size}.${extension}`;
    }

    return (
      <img
        ref={(img) => {
          if (!img) {
            return;
          }

          if ((img.complete || img.naturalWidth) && !loaded) {
            this.onLoad(img);
          }
        }}
        className={classnames(
          "image",
          loaded && !isSnap() ? "image-visible" : "",
          className
        )}
        src={image}
        onLoad={() => this.onLoad()}
        {...props}
      />
    );
  }
}

export default Image;
