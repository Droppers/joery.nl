import React from "react";
import Image from "../../../../image/image";
import classnames from "classnames";
import { isSnap } from "../../../../../utils/browser";

class PhoneFrame extends React.Component {
  constructor(props) {
    super(props);

    this.phoneRef = React.createRef();
    this.imageRef = React.createRef();

    this.state = {
      height: 0,
      width: 0,
      isLoading: true,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = () => {
    // this.updateImageSize();
  };

  onLoad = (e) => {
    this.image = e.target;
    // setTimeout(() => this.updateImageSize(), 1);
  };

  updateImageSize() {
    if (!this.image) return;

    const phoneHeight = this.phoneRef.current.clientHeight;
    this.setState({
      width: (this.image.naturalWidth / this.image.naturalHeight) * phoneHeight,
      height: phoneHeight,
      isLoading: false,
    });
  }

  render() {
    const { src, alt, className } = this.props;
    const { width, height, isLoading } = this.state;

    let imageProps = {};
    if (width && height) {
      imageProps = {
        width: width,
        height: height,
      };
    }

    return (
      <div
        className={classnames(
          "phone-frame",
          className
          // isLoading || isSnap() ? "phone-invisible" : "phone-visible"
        )}
        ref={this.phoneRef}
      >
        <Image
          alt={alt}
          image={src}
          size={512}
          ref={this.imageRef}
          onLoad={this.onLoad}
          {...imageProps}
        />
      </div>
    );
  }
}

export default PhoneFrame;
