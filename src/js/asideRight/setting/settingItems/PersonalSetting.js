import React from "react";
import "../../../../css/asideRight/setting/settingItems/PersonalSetting.css";
import SettingPartTitle from "./SettingPartTitle";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import user from "../../../../constData/user";
import UserImg from "../../../common/UserImg";

export default class PersonalSetting extends React.Component {
  render() {
    return (
      <div className="personalSetting">
        <SettingPartTitle icon={<UserOutlined />} content="个人信息" />
        <Form>
          <Form.Item
            label="个人头像"
            name="userImg"
          >
            <UserImg
            type="userImg"
              title={"点击上传"}
              username={user[0].username}
              src={user[0].src}
            />
          </Form.Item>
          <Form.Item
            label="用户昵称"
            name="username"
          >
            <Input
              defaultValue={user[0].username}
              placeholder="请输入需要修改的新用户名"
            />
          </Form.Item>
          <Form.Item
            label="个性签名"
            name="msg"
          >
            <Input.TextArea
              defaultValue={
                user[0].msg === "" ? "什么也没有留下..." : user[0].msg
              }
              style={{ resize: "none" }}
            />
          </Form.Item>
          <Form.Item className="submitButton">
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
