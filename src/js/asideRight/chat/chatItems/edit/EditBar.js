import React from "react";
import "../../../../../css/asideRight/chat/chatItems/edit/EditBar.css";
import Emoji from "./editBarItmes/Emoji"
import MyEmoPack from "./editBarItmes/MyEmoPack"
import Style from "./editBarItmes/Style";
// import History from "./editBarItmes/History";
import Send from "./editBarItmes/Send";

export default class EditBar extends React.Component {
  render() {
    return (
      <div className="editBar">
        <div className="leftSide">
        <Emoji/>
        <MyEmoPack/>
        <Style/>
        {/* <History/> */}
        </div>
        <Send/>
      </div>
    );
  }
}
