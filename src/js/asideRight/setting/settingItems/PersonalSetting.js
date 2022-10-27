import React from "react";
import "../../../../css/asideRight/setting/settingItems/PersonalSetting.css";
import SettingPartTitle from "./SettingPartTitle";
import { Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import user from "../../../../constData/user";

export default class PersonalSetting extends React.Component {
  render() {
    return (
      <div className="personalSetting">
        <SettingPartTitle icon={<UserOutlined />} content="个人信息" />
        <Form>
          <Form.Item
            label="用户昵称"
            name="username"
            rules={[
              {
                required: true,
                message: "inputUsername",
              },
            ]}
          >
            <Input
              defaultValue={user[0].username}
              placeholder="请输入需要修改的新用户名"
            />
          </Form.Item>
          <Form.Item
            label="个人签名"
            name="msg"
            rules={[
              {
                required: true,
                message: "inputMsg",
              },
            ]}
          >
            <Input.TextArea defaultValue={user[0].msg===''?"什么也没有留下...":user[0].msg} style={{ resize: "none" }} />
          </Form.Item>
        </Form>
      </div>
    );
  }
}
