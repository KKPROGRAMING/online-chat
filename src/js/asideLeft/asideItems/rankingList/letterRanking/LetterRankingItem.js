import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/letterRanking/LetterRankingItem.css";
import UserImg from "../../../../common/UserImg";
import Username from "../../../../common/Username";

export default class LetterRankingItem extends React.Component {
  render() {
    return (
      <div>
        <div className="rankingItem">
          <UserImg type="userImg-ranking" src={this.props.src} />
            <Username content={this.props.username} />
        </div>
      </div>
    );
  }
}
