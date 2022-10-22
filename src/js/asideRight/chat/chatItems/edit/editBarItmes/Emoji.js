import React from "react";
import "../../../../../../css/asideRight/chat/chatItems/edit/editBarItmes/Emoji.css";
import { Button, Popover } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import emojiList from "../../../../../../constData/emojiList"

export default class EditBar extends React.Component {
  render() {
    return (
      <div className="emoji">
        <Popover content={emojiList} title="表情符号">
          <Button type="text" block icon={<SmileOutlined />}></Button>
        </Popover>
      </div>
    );
  }
}
