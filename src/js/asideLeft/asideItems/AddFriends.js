import React from "react";
import "../../../css/asideLeft/asideItems/AddFriends.css";
import { Input, Tooltip, Button } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export default class AddFriends extends React.Component {
  render() {
    return (
      <div className="addFriends">
        <div className="outer">
            通过添加好友开启更多聊天！
          <div className="decoration">
            <span>🌊🏄</span>
          </div>
        </div>

        <Tooltip title="必填" placement="topLeft">
          <Input
            size="middle"
            placeholder="对方昵称"
            prefix={<UserOutlined />}
            className="input"
          />
        </Tooltip>
        <Tooltip title="选填" placement="topLeft">
          <Input
            size="middle"
            placeholder="对方手机号"
            prefix={<PhoneOutlined />}
            className="input"
          />
        </Tooltip>
        <Tooltip title="选填" placement="topLeft">
          <TextArea
            rows={5}
            placeholder="给对方留言吧..."
            maxLength={100}
            className="textarea"
          />
        </Tooltip>
        <Button type="primary" className="submit">
          发起好友申请
        </Button>
      </div>
    );
  }
}
