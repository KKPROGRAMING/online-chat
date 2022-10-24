import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/letterRanking/LetterRankingItem.css";
import UserImg from "../../../../common/UserImg";
import Username from "../../../../common/Username";

export default class LetterRankingItem extends React.Component {
  render() {
    return (
      <div>
        <div className="rankingItem">
          <UserImg title={this.props.username} type="userImg-ranking" src={this.props.src} />
          <div className="personalInfo">
            <Username content={this.props.username} />
          </div>
        </div>
      </div>
    );
  }
}
