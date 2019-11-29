import React from "react";
import Image from "../../../image/image";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: null,
      orientation: "portrait"
    };

    this.image = React.createRef();
  }

  handleChange(input, image) {
    const orientation =
      input.naturalHeight > input.naturalWidth ? "portrait" : "landscape";
    this.setState({
      activeImage: image,
      orientation: orientation
    });
  }

  onLoad(input, image) {
    const { images } = this.props;

    if (image === images[0]) {
      this.handleChange(input, image);
    }
  }

  render() {
    const { activeImage, orientation } = this.state;
    const { images } = this.props;

    return (
      <div className="image-gallery">
        <div className="image-container">
          {activeImage && (
            <Image
              ref={this.image}
              className={"image card " + orientation}
              alt=""
              src={activeImage}
            />
          )}
        </div>
        <div className="thumbnails">
          {images.map((image, key) => (
            <Image
              key={key}
              className="thumbnail card card-hover"
              alt=""
              src={image}
              onLoad={e => this.onLoad(e.target, image)}
              onClick={e => this.handleChange(e.target, image)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ImageGallery;
