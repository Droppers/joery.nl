/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  onLoad(img) {
    this.setState({
      loaded: true,
    });

    if (this.props.onLoad) {
      this.props.onLoad({ target: img });
    }
  }

  render() {
    const { loaded } = this.state;
    let { image, extension, size, uncompressed, ...props } = this.props;

    const development =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    if (!development) {
      extension = extension || "jpg";
      size = size || 1024;
      const path = image.substr(0, image.lastIndexOf("."));
      image = `${path}-${size}.${extension}`;
    }

    return (
      <img
        ref={(img) => {
          if (!img || loaded) {
            return;
          }

          img.onload = () => {
            this.onLoad(img);
          };

          if (img.complete) {
            this.onLoad(img);
          }
        }}
        src={image}
        {...props}
      />
    );
  }
}

export default Image;
