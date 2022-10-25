import React from "react";
import "../../../../css/asideRight/chat/chatItems/MessageBoard.css";
import MessageItem from "./message/MessageItem";
import messages from "../../../../constData/messages";
import user from "../../../../constData/user";

export default class MessageBoard extends React.Component {
  render() {
    let username = user[0].username;
    return (
      <div className="messageBoard">
        {messages.map((item) => {
          if (username === item.self) {
            return (
              <MessageItem
                key={item.messageID}
                role="self"
                content={item.text}
                time={item.time}
              />
            );
          } else {
            return (
              <MessageItem 
                key={item.messageID}
                role="opposite"
                content={item.text}
                time={item.time}
              />
            );
          }
        })
        }
      </div>
    );
  }
}
