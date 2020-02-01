import React from "react";
import Image from "../../../../image/image";
import classnames from "classnames";
import { isWebkit } from "../../../../../utils/browser";

class PhoneFrame extends React.Component {
  constructor(props) {
    super(props);

    this.phoneRef = React.createRef();
    this.imageRef = React.createRef();

    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    if (!isWebkit()) {
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    if (!isWebkit()) {
      window.removeEventListener("resize", this.onResize);
    }
  }

  onResize = () => {
    this.updateImageSize();
  };

  onLoad = e => {
    if (!isWebkit()) {
      this.image = e.target;
      this.updateImageSize();
    }
  };

  updateImageSize() {
    if (!this.image) return;

    const computedStyle = getComputedStyle(this.phoneRef.current);
    const height = parseInt(computedStyle.getPropertyValue("height"), 10);
    this.setState({
      width: (this.image.naturalWidth / this.image.naturalHeight) * height,
      height: height
    });
  }

  render() {
    const { src, className } = this.props;
    const { width, height } = this.state;

    let imageProps = {};
    if (width && height) {
      imageProps = {
        width: width,
        height: height
      };
    }

    return (
      <div className={classnames("phone-frame", className)} ref={this.phoneRef}>
        <Image
          alt="todo"
          src={src}
          ref={this.imageRef}
          onLoad={this.onLoad}
          {...imageProps}
        />
      </div>
    );
  }
}

export default PhoneFrame;
