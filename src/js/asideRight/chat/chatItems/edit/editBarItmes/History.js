import React from "react";
import "../../../../../../css/asideRight/chat/chatItems/edit/editBarItmes/History.css";
import { Button, Popover } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default class History extends React.Component {
  render() {
    return (
      <div className="history">
        <Popover content="暂时为空" title="聊天记录">
          <Button type="text" block icon={<SearchOutlined />}></Button>
        </Popover>
      </div>
    );
  }
}
