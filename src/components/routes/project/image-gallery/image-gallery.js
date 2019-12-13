import React from "react";
import Image from "../../../image/image";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeImage: null,
      orientation: "portrait"
    };
  }

  componentDidUpdate() {
    const { activeImage } = this.state;
    const { images } = this.props;

    if (!activeImage && images.length > 0) {
      this.setState({
        activeImage: images[0]
      });
    }
  }

  handleChange(image) {
    const orientation = image.height > image.width ? "portrait" : "landscape";
    console.log(image.height, image.width);
    this.setState({
      activeImage: image,
      orientation: orientation
    });
  }

  getThumbnail(src) {
    const development =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";

    if (development) {
      return src;
    } else {
      return src.substr(0, src.lastIndexOf(".")) + "-thumb.jpg";
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
              src={activeImage.src}
            />
          )}
        </div>
        <div className="card thumbnails-card">
          <div className="thumbnails">
            {images.map((image, key) => (
              <Image
                key={key}
                className={
                  "thumbnail card card-hover " +
                  (image === activeImage ? "active" : "")
                }
                style={{
                  height: 100,
                  width: 100 * (image.width / image.height) + "px"
                }}
                alt=""
                src={this.getThumbnail(image.src)}
                onClick={() => this.handleChange(image)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
