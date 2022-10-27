import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/letterRanking/FiltedFriends.css";
import friends from "../../../../../constData/friends";
import LetterRankingItem from "./LetterRankingItem";
import { Divider } from "antd";
import { pinyin } from "pinyin-pro";

export default class FiltedFriends extends React.Component {
  render() {
    return (
      <div className="filtedFriends" id={this.props.id}>
        <Divider orientation="left" className="divider">
          {this.props.letter.toUpperCase()}
        </Divider>
        {friends.map((item, index) => {
          if (
            pinyin(item.username, {
              pattern: "first",
              type: "array",
            })[0] === this.props.letter
          )
            return (
              <LetterRankingItem
                key={"friend" + index}
                username={item.username}
                src={item.src}
              />
            );
        })}
      </div>
    );
  }
}
