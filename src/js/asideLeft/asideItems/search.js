import React from "react";
import "../../../css/asideLeft/asideItems/Search.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <Input placeholder="search..." />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </div>
    );
  }
}
