import React from "react";
import "../../../css/asideLeft/asideItems/Personal.css";
import UserImg from "../../common/UserImg";
import Username from "../../common/Username";
import SignatrueOrMsg from "../../common/SignatrueOrMsg";

export default class Personal extends React.Component {
  render() {
    return (
      <div className="personal">
        <UserImg title="伤心太平洋🐏" type="userImg" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        <div className="personalInfo">
          <Username content="伤心太平洋🐏" />
          <SignatrueOrMsg
            classname="signatrue"
            content="Hello World!Hello World!Hello World!"
          />
        </div>
      </div>
    );
  }
}
