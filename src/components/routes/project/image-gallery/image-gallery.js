import React from "react";
import PropTypes from "prop-types";
import Image from "../../../image/image";
import ImageThumbnails from "./image-thumbnails/image-thumbnails";
import ImageModal from "./image-modal/image-modal";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: null,
      orientation: "portrait",
      modalOpen: false,
    };
  }

  componentDidUpdate() {
    const { activeImage } = this.state;
    const { images } = this.props;

    if (!activeImage && images.length > 0) {
      this.handleChange(images[0]);
      this.setState({
        activeImage: images[0],
      });
    }
  }

  handleChange(image) {
    const orientation = image.height > image.width ? "portrait" : "landscape";
    this.setState({
      activeImage: image,
      orientation: orientation,
    });
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    if (this.state.modalOpen) {
      this.setState({
        modalOpen: false,
      });
    }
  }

  render() {
    const { activeImage, orientation, modalOpen } = this.state;
    const { images } = this.props;

    return (
      <div className="image-gallery">
        <ImageModal
          isOpen={modalOpen}
          images={images}
          initialActiveImage={activeImage}
          onModalClose={() => this.closeModal()}
        />
        <div className="image-container">
          {activeImage && (
            <Image
              ref={this.image}
              className={"image card " + orientation}
              alt=""
              onClick={() => this.openModal()}
              size={1024}
              image={activeImage.src}
            />
          )}
        </div>
        <div className="thumbnails-container">
          <ImageThumbnails
            images={images}
            activeImage={activeImage}
            onActiveChange={(image) => this.handleChange(image)}
          />
        </div>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
