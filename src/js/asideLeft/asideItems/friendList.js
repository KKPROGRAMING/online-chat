import React from "react";
import "../../../css/asideLeft/asideItems/FriendList.css";
import FriendItem from "./firendList/FriendItem";
import friends from "../../../constData/friends";

export default class FriendList extends React.Component {
  render() {
    return (
      <div className="friendList">
        {friends.map((item, index) => {
          return (
            <FriendItem
              key={index}
              classname="msg"
              username={item.username}
              signatrueOrMsg={item.msg}
              src={item.src}
            />
          );
        })}
      </div>
    );
  }
}
