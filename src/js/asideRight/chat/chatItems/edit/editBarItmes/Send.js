import React from "react";
import "../../../../../../css/asideRight/chat/chatItems/edit/editBarItmes/Send.css";
import { Button } from "antd";

export default class EditBar extends React.Component {
  render() {
    return (
        <div className="send">
          <Button type="primary" block title="使用“enter”键也可完成发送功能">
            发送
          </Button>
        </div>
    );
  }
}
