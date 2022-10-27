import React from "react";
import "../../../../css/asideRight/setting/settingItems/SecuritySetting.css";
import SettingPartTitle from "./SettingPartTitle";
import { Divider } from "antd";
import {SafetyOutlined } from "@ant-design/icons";

export default class SecuritySetting extends React.Component {
  render() {
    return (
      <div className="securitySetting">
        <SettingPartTitle icon={<SafetyOutlined/>} content="安全设置" />
      </div>
    );
  }
}
