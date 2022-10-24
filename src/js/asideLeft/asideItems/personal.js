import React from "react";
import "../../../css/asideLeft/asideItems/Personal.css";
import UserImg from "../../common/UserImg";
import Username from "../../common/Username";
import SignatrueOrMsg from "../../common/SignatrueOrMsg";
import user from "../../../constData/user";

export default class Personal extends React.Component {
  render() {
    let current_user = user[0];
    return (
      <div className="personal">
        <UserImg title={current_user.username} type="userImg" src={current_user.src} />
        <div className="personalInfo">
          <Username content={current_user.username} />
          <SignatrueOrMsg
            classname="signatrue"
            content={current_user.msg}
          />
        </div>
      </div>
    );
  }
}
