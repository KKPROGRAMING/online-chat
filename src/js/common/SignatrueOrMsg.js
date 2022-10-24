import React from "react";
import "../../css/common/SignatrueOrMsg.css";
import { Tooltip } from "antd";

export default class SignatrueOrMsg extends React.Component {
  render() {
    return (
      <Tooltip title={this.props.content}>
        <div className={this.props.classname}>{this.props.content}</div>
      </Tooltip>
    );
  }
}
