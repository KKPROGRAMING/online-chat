import React from "react";
import "../../../css/asideLeft/asideItems/RankingList.css";
import LetterRanking from "./rankingList/letterRanking/LetterRanking";
import FireRanking from "./rankingList/fireRanking/FireRanking";
import { Segmented } from "antd";
import { SortAscendingOutlined, FireOutlined } from "@ant-design/icons";

export default class RankingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rankingSegmented: "首字母检索",
    };
    this.selectRankingSegmented = this.selectRankingSegmented.bind(this);
  }
  selectRankingSegmented(val) {
    this.setState({ rankingSegmented: val });
    // console.log(val);
  }
  render() {
    if (this.state.rankingSegmented === "首字母检索") {
      return (
        <div className="rankingList">
          <Segmented
            onChange={this.selectRankingSegmented}
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
          <LetterRanking />
          {/* <FireRanking /> */}
        </div>
      );
    } else if (this.state.rankingSegmented === "亲密度排行") {
      return (
        <div className="rankingList">
          <Segmented
            onChange={this.selectRankingSegmented}
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
          <FireRanking />
        </div>
      );
    }
  }
}
