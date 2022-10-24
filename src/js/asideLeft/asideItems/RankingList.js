import React from "react";
import "../../../css/asideLeft/asideItems/RankingList.css";
import LetterRankingItem from "./rankingList/letterRanking/LetterRankingItem";
import FireRankingItem from "./rankingList/fireRanking/FireRankingItem";
import FiltedFriends from "./rankingList/letterRanking/FiltedFriends";
import friends from "../../../constData/friends";
import { Segmented } from "antd";
import { SortAscendingOutlined, FireOutlined } from "@ant-design/icons";
import { pinyin } from "pinyin-pro";

export default class RankingList extends React.Component {
  render() {
    let filtedLetters = friends.map((item) => {
      return pinyin(item.username, { pattern: "first", type: "array" })[0];
    });
    filtedLetters = Array.from(new Set(filtedLetters));
    filtedLetters = filtedLetters.sort();
    // console.log(filtedLetters);

    return (
      <div className="rankingList">
        <Segmented
          options={[
            {
              label: "首字母检索",
              value: "首字母检索",
              icon: <SortAscendingOutlined />,
            },
            {
              label: "亲密度排行",
              value: "亲密度排行",
              icon: <FireOutlined />,
            },
          ]}
          block
          className="segmented"
        />
        {filtedLetters.map((item, index) => (
          <FiltedFriends letter={item} key={index} />
        ))}
      </div>
    );
  }
}
