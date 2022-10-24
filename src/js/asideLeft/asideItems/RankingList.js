import React from "react";
import "../../../css/asideLeft/asideItems/RankingList.css";
import LetterRanking from "./rankingList/letterRanking/LetterRanking"
import FireRanking from "./rankingList/fireRanking/FireRanking";
import { Segmented } from "antd";
import { SortAscendingOutlined, FireOutlined } from "@ant-design/icons";

export default class RankingList extends React.Component {
  render() {
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
        {/* <LetterRanking/> */}
        <FireRanking/>
      </div>
    );
  }
}
