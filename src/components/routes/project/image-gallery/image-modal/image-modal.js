import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Image from "../../../../image/image";
import ImageThumbnails from "../image-thumbnails/image-thumbnails";
import { isMSIE } from "../../../../../utils/browser";

class ImageModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeImage: null
    };
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.open();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.open();
    } else if (!this.props.isOpen && prevProps.isOpen) {
      this.close();
    }
  }

  open() {
    if (isMSIE()) document.body.style.msOverflowStyle = "none";
    document.body.style.overflow = "hidden";

    this.setState({
      isOpen: true,
      activeImage: this.props.initialActiveImage
        ? this.props.initialActiveImage
        : this.state.activeImage
    });
  }

  close() {
    if (isMSIE()) document.body.style.msOverflowStyle = "auto";
    document.body.style.overflow = "unset";

    this.setState({
      isOpen: false
    });
  }

  onClick() {
    this.close();

    if (this.props.onModalClose) {
      this.props.onModalClose();
    }
  }

  handleActiveChange(image) {
    this.setState({
      activeImage: image
    });
  }

  render() {
    const { isOpen, activeImage } = this.state;
    const { images } = this.props;

    return (
      <div
        className={classnames("image-modal", isOpen ? "modal-visible" : "")}
        onClick={() => this.onClick()}
      >
        {isOpen ? (
          <React.Fragment>
            <div className={"image-large"}>
              {activeImage && <Image className="card" src={activeImage.src} />}
            </div>
            <div className={"thumbnail-container"}>
              <ImageThumbnails
                images={images}
                activeImage={activeImage}
                onActiveChange={image => this.handleActiveChange(image)}
              />
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.object),
  initialActiveImage: PropTypes.object,
  onModalClose: PropTypes.func
};

export default ImageModal;
