import React from "react";
import "../../../../css/asideRight/chat/chatItems/FriendTitle.css";
import UserImg from "../../../common/UserImg";
import Username from "../../../common/Username";
import SignatrueOrMsg from "../../../common/SignatrueOrMsg";
import FriendOptions from "./friendTitle/FriendOptions";

export default class FriendTitle extends React.Component {
  render() {
    return (
      <div className="friendTitle">
        <UserImg type="userImg" src=" http://kkprograming.gitee.io/static-resource-library/img1.jpeg"/>
        <div className="friendInfo">
          <Username content={this.props.username}/>
          <SignatrueOrMsg classname={this.props.classname} content={this.props.signatrue} />
        </div>
        <FriendOptions username={this.props.username} fire={this.props.fire}/>
      </div>
    );
  }
}
