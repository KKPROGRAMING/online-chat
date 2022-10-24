import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/letterRanking/LetterRanking.css";
import FiltedFriends from "./FiltedFriends";
import friends from "../../../../../constData/friends";
import { pinyin } from "pinyin-pro";

export default class LetterRanking extends React.Component {
  render() {
    let filtedLetters = friends.map((item) => {
      return pinyin(item.username, { pattern: "first", type: "array" })[0];
    });
    filtedLetters = Array.from(new Set(filtedLetters));
    filtedLetters = filtedLetters.sort();

    return (
      <div className="letterRanking">
        {filtedLetters.map((item, index) => (
          <FiltedFriends letter={item} key={index} />
        ))}
      </div>
    );
  }
}
