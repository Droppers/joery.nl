/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webp: !!window.webp
    };
  }

  componentDidMount() {
    if (typeof window.webp === "undefined") {
      const webpTest = new Image();
      webpTest.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      webpTest.onload = webpTest.onerror = () => {
        window.webp = webpTest.height === 2;

        this.setState({ webp: window.webp });
      };
    }
  }

  render() {
    const development =
      !process.env.NODE_ENV || process.env.NODE_ENV === "development";

    const { webp } = this.state;
    let { ...props } = this.props;
    if (props.src && !development) {
      if (webp) {
        const webpSrc =
          props.src.substr(0, props.src.lastIndexOf(".")) + ".webp";
        props.src = webpSrc;
      }
    }

    return <img {...props} key={props.src} loading="lazy" />;
  }
}

export default Image;
