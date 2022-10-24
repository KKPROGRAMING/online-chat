import React from "react";
import "../../css/common/UserImg.css";

export default class UserImg extends React.Component {
  render() {
    return (
      <img className={this.props.type}
            alt="img"
            src={this.props.src} 
            title={this.props.title} />
    );
  }
}
