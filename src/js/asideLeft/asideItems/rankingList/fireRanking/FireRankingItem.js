import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/fireRanking/FireRankingItem.css";
import UserImg from "../../../../common/UserImg";
import Username from "../../../../common/Username";
import link from "../../../../../constData/link";
import friends from "../../../../../constData/friends";
import user from "../../../../../constData/user";
import { Button, Statistic } from "antd";
import { FireTwoTone, FireOutlined } from "@ant-design/icons";

export default class FireRankingItem extends React.Component {
  render() {
    let targetLink = this.props.link;
    let targetName =
      targetLink.username1 === user[0].username
        ? targetLink.username2
        : targetLink.username1;

    let targetImg;
    friends.forEach((item) => {
      if (item.username === targetName) {
        targetImg = item.src;
      }
    });

    let style, icon, valueStyle;
    if (this.props.index <= 3) {
      style = "emRank";
      icon = <FireTwoTone style={{ fontSize: 20 }} />;
      valueStyle = { color: "#69b7ff", fontSize: 20 };
    } else {
      style = "commonRank";
      icon = <FireTwoTone style={{ fontSize: 20 }} twoToneColor="#d9e5f4" />;
      valueStyle = { color: "#d9e5f4", fontSize: 20 };
    }

    return (
      <div className="fireRankingItem">
        <h3 className={style} type="text" shape="circle">
          {this.props.index}
        </h3>
        <UserImg src={targetImg} type="userImg-ranking" />
        <div className="personalInfo">
          <Username content={targetName} />
        </div>
        <Statistic
          prefix={icon}
          value={this.props.fire}
          type="small"
          className="statistic"
          valueStyle={valueStyle}
        />
      </div>
    );
  }
}
