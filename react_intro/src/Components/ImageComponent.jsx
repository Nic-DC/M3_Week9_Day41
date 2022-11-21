import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img className={this.props.stylingClass} src={this.props.source} alt={this.props.altext} />;
  }
}

export default ImageComponent;
