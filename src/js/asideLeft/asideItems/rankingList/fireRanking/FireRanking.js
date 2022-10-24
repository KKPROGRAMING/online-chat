import React from "react";
import "../../../../../css/asideLeft/asideItems/rankingList/fireRanking/FireRanking.css";
import link from "../../../../../constData/link";
import FireRankingItem from "./FireRankingItem";

export default class FireRanking extends React.Component {
  render() {
    let fireSort = link.sort((a, b) => {
      return b.fire - a.fire;
    });
    console.log(fireSort);
    return (
      <div className="letterRanking">
        {fireSort.map((item, index) => (
          <FireRankingItem
            link={item}
            key={"fire" + index}
            index={index + 1}
            fire={item.fire}
          />
        ))}
      </div>
    );
  }
}
