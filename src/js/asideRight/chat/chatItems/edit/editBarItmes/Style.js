import React from "react";
import "../../../../../../css/asideRight/chat/chatItems/edit/editBarItmes/Style.css";
import { Button, Popover } from "antd";
import { FormOutlined  } from "@ant-design/icons";

export default class Style extends React.Component {
  render() {
    return (
      <div className="style">
        <Popover content="暂时为空" title="编辑文字格式">
          <Button type="text" block icon={<FormOutlined />}></Button>
        </Popover>
      </div>
    );
  }
}
