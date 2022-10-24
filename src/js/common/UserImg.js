import React from "react";
import "../../css/common/UserImg.css";
import { Tooltip } from "antd";

export default class UserImg extends React.Component {
  render() {
    return (
      <Tooltip title={this.props.title}>
        <img className={this.props.type} alt="img" src={this.props.src} />
      </Tooltip>
    );
  }
}
