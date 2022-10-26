import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/letterRanking/LetterRanking.css";
import FiltedFriends from "./FiltedFriends";
import friends from "../../../../../constData/friends";
import { pinyin } from "pinyin-pro";
import { Breadcrumb } from "antd";

export default class LetterRanking extends React.Component {
  render() {
    let filtedLetters = friends.map((item) => {
      return pinyin(item.username, { pattern: "first", type: "array" })[0];
    });
    filtedLetters = Array.from(new Set(filtedLetters));
    filtedLetters = filtedLetters.sort();

    return (
      <div className="letterRanking">
        
        <div className="letterRankingContent">
          {filtedLetters.map((item, index) => (
            <FiltedFriends letter={item} key={'letter'+index} id={'letter'+index}/>
          ))}
        </div>
        <Breadcrumb className="indexBar" separator="">
          {filtedLetters.map((item, index) => (
            <Breadcrumb.Item
              className="indexBarItem"
              key={"letterIndex" + index}
            >
              <a href={'#letter'+index}>{item.toUpperCase()}</a>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
    );
  }
}
