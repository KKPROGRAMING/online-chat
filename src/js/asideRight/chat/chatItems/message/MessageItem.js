import React from "react";
import "../../../../../css/asideRight/chat/chatItems/message/MessageItem.css";

export default class MessageItem extends React.Component {
  render() {
    return (
      <div className={this.props.role}>
        <div className={"singleMessageModule_" + this.props.role}>
          {this.props.content}
        </div>
        <div className="messageTime">{this.props.time}</div>
      </div>
    );
  }
}
