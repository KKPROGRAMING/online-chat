import React from "react";
import "../../../css/asideLeft/asideItems/FriendList.css";
import FriendItem from "./firendList/FriendItem";

export default class FriendList extends React.Component {
  render() {
    return (
      <div className="friendList">
        <FriendItem
          classname="msg"
          username="土间埋🍊"
          signatrueOrMsg="一起去打游戏吧~"
        />
        <FriendItem
          classname="msg"
          username="土间太平"
          signatrueOrMsg="记得给小埋带便当。"
        />
        <FriendItem
          classname="msg"
          username="迪妮莎"
          signatrueOrMsg="。。。。。。"
        />
        <FriendItem
          classname="msg"
          username="伊尼莉"
          signatrueOrMsg="尝尝风之高速剑的威力吧！😈"
        />
        <FriendItem
          classname="msg"
          username="克蕾雅"
          signatrueOrMsg="踏上了寻找迪妮莎的旅途。"
        />
        <FriendItem
          classname="msg"
          username="嘉拉迪雅"
          signatrueOrMsg="下课了，记得叫我一起吃午饭。"
        />
        <FriendItem classname="msg" username="珍" signatrueOrMsg="好好上课。" />
        <FriendItem
          classname="msg"
          username="homer·simpson"
          signatrueOrMsg="homer!!!"
        />
      </div>
    );
  }
}
