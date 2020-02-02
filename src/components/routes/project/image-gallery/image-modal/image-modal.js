import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Image from "../../../../image/image";
import ImageThumbnails from "../image-thumbnails/image-thumbnails";
import { isMSIE } from "../../../../../utils/browser";
import Close from "vector/icons/close";

class ImageModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeImage: null,
      fullSize: false
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

  toggleFullSize(e) {
    e.stopPropagation();

    this.setState({
      fullSize: !this.state.fullSize
    });
  }

  handleActiveChange(image) {
    this.setState({
      activeImage: image,
      fullSize: false
    });
  }

  render() {
    const { isOpen, activeImage, fullSize } = this.state;
    const { images } = this.props;

    return (
      <div
        className={classnames("image-modal", isOpen ? "modal-visible" : "")}
        onClick={() => this.onClick()}
      >
        {isOpen ? (
          <React.Fragment>
            <div
              className={classnames("image-large", fullSize ? "full-size" : "")}
            >
              {activeImage && (
                <Image
                  className="card"
                  src={activeImage.src}
                  onClick={e => this.toggleFullSize(e)}
                />
              )}
            </div>
            <div className={"thumbnail-container"}>
              <ImageThumbnails
                images={images}
                activeImage={activeImage}
                onActiveChange={image => this.handleActiveChange(image)}
              />
            </div>
            <div className={"modal-close"} onClick={() => this.onClick()}>
              <Close />
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
