import React from "react";
import "../../css/asideLeft/AsideLeft.css";
import Personal from "./asideItems/Personal";
import Search from "./asideItems/Search";
import FriendList from "./asideItems/FriendList";
import FootBar from "./asideItems/FootBar";

export default class AsideLeft extends React.Component {
  render() {
    return (
      <div className="asideLeft">
        <Personal />
        <Search />
        <div>
          <FriendList />
          <FootBar />
        </div>
      </div>
    );
  }
}
