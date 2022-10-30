import React from "react";
import "../../../../css/asideRight/setting/settingItems/VersionInfo.css";
import SettingPartTitle from "./SettingPartTitle";
import { Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

export default class VersionInfo extends React.Component {
  render() {
    return (
      <div className="versionInfo">
        <SettingPartTitle icon={<InfoCircleOutlined />} content="版本信息" />
        基于react库开发的网页在线聊天工具！<br/>目前版本：
        <Button type="link" className="versionButton">
          Online-Chat version 1.0
        </Button>
      </div>
    );
  }
}
