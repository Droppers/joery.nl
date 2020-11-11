import React from "react";
import Image from "../../../../image/image";
import classnames from "classnames";

class PhoneFrame extends React.Component {
  render() {
    const { src, alt, className } = this.props;

    return (
      <Image
        className={classnames("phone-frame", className)}
        alt={alt}
        image={src}
        size={256}
      />
    );
  }
}

export default PhoneFrame;
