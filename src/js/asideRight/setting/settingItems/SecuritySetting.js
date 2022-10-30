import React from "react";
import "../../../../css/asideRight/setting/settingItems/SecuritySetting.css";
import SettingPartTitle from "./SettingPartTitle";
import { Form, Input, Button } from "antd";
import { SafetyOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default class SecuritySetting extends React.Component {
  render() {
    return (
      <div className="securitySetting">
        <SettingPartTitle icon={<SafetyOutlined />} content="密码设置" />
        <Form>
          <Form.Item
            label={"原始密码"}
            name={"oldPassword"}
            rules={[
              {
                required: true,
                message: "not null",
              },
            ]}
          >
            <Input.Password
              placeholder="请输入原始密码..."
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            label={"修改密码"}
            name={"newPassword"}
            rules={[
              {
                required: true,
                message: "not null",
              },
            ]}
          >
            <Input.Password
              placeholder="请输入新密码..."
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            label={"再次确认"}
            name={"newPasswordAgain"}
            rules={[
              {
                required: true,
                message: "not null",
              },
            ]}
          >
            <Input.Password
              placeholder="请再次输入新密码..."
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
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
