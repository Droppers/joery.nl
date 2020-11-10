import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Image from "../../../../image/image";

class ImageThumbnails extends React.Component {
  handleChange(e, image) {
    e.stopPropagation();

    if (this.props.onActiveChange) {
      this.props.onActiveChange(image);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activeImage !== this.props.activeImage) {
      this.forceUpdate();
    }
  }

  render() {
    const { images, activeImage } = this.props;
    return (
      <div className="image-thumbnails">
        {images.map((image, key) => (
          <Image
            image={image.src}
            size={256}
            key={key}
            className={classnames(
              "thumbnail card card-hover ",
              image === activeImage ? "active" : ""
            )}
            height={100}
            width={100 * (image.width / image.height) + "px"}
            onClick={e => this.handleChange(e, image)}
          />
        ))}
      </div>
    );
  }
}

ImageThumbnails.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  activeImage: PropTypes.object,
  onActiveChange: PropTypes.func
};

export default ImageThumbnails;
