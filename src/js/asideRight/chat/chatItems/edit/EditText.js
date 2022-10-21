import React from "react";
import "../../../../../css/asideRight/chat/chatItems/edit/EditText.css";
import { Input } from "antd";
const { TextArea } = Input;

export default class EditText extends React.Component {
  render() {
    return (
      // <textarea className="editText"></textarea>
      <TextArea className="editText"/>
    );
  }
}
