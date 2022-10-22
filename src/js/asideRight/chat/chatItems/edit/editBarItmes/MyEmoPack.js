import React from "react";
import "../../../../../../css/asideRight/chat/chatItems/edit/editBarItmes/MyEmoPack.css";
import { Button, Popover } from "antd";
import { HeartOutlined } from "@ant-design/icons";

export default class MyEmoPack extends React.Component {
  render() {
    return (
      <div className="myEmoPack">
        <Popover content="暂时为空" title="我的表情包">
          <Button type="text" block icon={<HeartOutlined />}></Button>
        </Popover>
      </div>
    );
  }
}
