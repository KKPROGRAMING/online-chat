import React from "react";
import "../../../css/asideLeft/asideItems/Search.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <Input placeholder="输入些什么吧..." />
        <Button type="primary" icon={<SearchOutlined />}>
          搜索
        </Button>
      </div>
    );
  }
}
