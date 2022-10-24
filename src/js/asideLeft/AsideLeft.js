import React from "react";
import "../../css/asideLeft/AsideLeft.css";
import Personal from "./asideItems/Personal";
import Search from "./asideItems/Search";
import FriendList from "./asideItems/FriendList";
import RankingList from "./asideItems/RankingList";
import AddFriends from "./asideItems/AddFriends";
import FootBar from "./asideItems/FootBar";

export default class AsideLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segmented: "联系人",
    };
    this.selectSegmented = this.selectSegmented.bind(this);
  }
  selectSegmented(val) {
    this.setState({ segmented: val });
  }
  render() {
    if (this.state.segmented === "消息"){
      return (
        <div className="asideLeft">
          <Personal />
          <Search />
          <div>
            <FriendList />
            <FootBar selectSegmented={this.selectSegmented}/>
          </div>
        </div>
      );
    }
    else if(this.state.segmented === "联系人"){
      return (
        <div className="asideLeft">
          <Personal />
          <Search />
          <div>
            <RankingList />
            <FootBar selectSegmented={this.selectSegmented}/>
          </div>
        </div>
      );
    }else if(this.state.segmented === "添加"){
      return (
        <div className="asideLeft">
          <Personal />
          <Search />
          <div>
            <AddFriends />
            <FootBar selectSegmented={this.selectSegmented}/>
          </div>
        </div>
      );
    }
    
  }
}
